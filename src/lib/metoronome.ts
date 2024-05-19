import color from "../const/color";

export const Beats = {
  OPTION1: "4beat",
  DEFAULT: "8beat",
  OPTION2: "16beat",
  OPTION3: "Triplet",
} as const;

export type Beats = (typeof Beats)[keyof typeof Beats];

type note = {
  note: number;
  time: number;
};

export type Status = "on" | "off";

/**
 * Metoronome
 * @remarks
 * This class is used to control the sound of the metronome.
 */
export class Metoronome {
  private readonly notesInQueue: note[] = [];
  private readonly noteLength = 0.05;
  private readonly lookahead = 25;
  private last16thNoteDrawn = -1; // the last "box" we drew on the screen

  private nextNoteTime = 0;
  private scheduleAheadTime = 0.1;
  private current16thNote = 0;

  private audioCtx: AudioContext | null = null;
  private timerWorker: Worker | null = null;

  private _playButton: HTMLButtonElement | null = null;
  private _beat: Beats;
  private _tempo: number;

  public status: Status = "off";

  constructor() {
    this._beat = Beats.DEFAULT;
    this._tempo = 120;
  }

  get playButton() {
    return this._playButton;
  }

  set playButton(val) {
    this._playButton = val;
  }

  get beat() {
    return this._beat;
  }

  set beat(val) {
    this._beat = val;
  }

  get tempo() {
    return this._tempo;
  }

  set tempo(val) {
    this._tempo = val;
  }

  /**
   * Start the metronome
   */
  public start() {
    if (!this.timerWorker) {
      throw new Error("timerWorker is not defined");
    }

    this.timerWorker.postMessage("start");
    this.status = "on";

    setTimeout(() => {
      if (!this.audioCtx) {
        throw new Error("audioCtx is not defined");
      }

      this.current16thNote = 0;
      this.nextNoteTime = this.audioCtx.currentTime;
    }, 10);
  }

  /**
   * Stop the metronome
   */
  public stop() {
    if (!this.timerWorker) {
      throw new Error("timerWorker is not defined");
    }

    this.timerWorker.postMessage("stop");
    this.status = "off";
  }

  /**
   * Draw the metronome
   */
  private _draw() {
    if (!this.audioCtx) {
      throw new Error("audioCtx is not defined");
    }

    let currentNote = this.last16thNoteDrawn;
    const currentTime = this.audioCtx.currentTime;
    const button = this.playButton || null;

    while (
      this.notesInQueue.length &&
      this.notesInQueue[0].time < currentTime
    ) {
      currentNote = this.notesInQueue[0].note;
      this.notesInQueue.splice(0, 1); // remove note from queue
    }

    // We only need to draw if the note has moved.
    if (this.last16thNoteDrawn !== currentNote) {
      this.last16thNoteDrawn = currentNote;

      if (currentNote % 12 === 0 && button) {
        const activeColor =
          currentNote === 0 ? color.SECONDARY : color.TERTIARY;
        button.animate(
          [
            {
              backgroundColor: activeColor,
              easing: "steps(1, start)",
            },
            { backgroundColor: activeColor, easing: "linear" },
          ],
          {
            duration: 30000 / this.tempo,
            iterations: 1,
          },
        );
      }
    }

    // set up to draw again
    requestAnimationFrame(this._draw.bind(this));
  }

  /**
   * While there are notes that need to be played before the next interval,
   * schedule them and move the pointer forward.
   */
  private scheduler(): void {
    if (!this.audioCtx) {
      throw new Error("audioCtx is not defined");
    }

    while (
      this.nextNoteTime <
      this.audioCtx.currentTime + this.scheduleAheadTime
    ) {
      this.scheduleNote(this.current16thNote, this.nextNoteTime);
      this.nextNote();
    }
  }

  /**
   * Sound according to tempo
   *
   * @param beatNumber - beat number
   * @param time - time
   */
  private scheduleNote(beatNumber: number, time: number): void {
    if (!this.audioCtx) {
      throw new Error("audioCtx is not defined");
    }

    /**
     * Control of the sound emitted
     */
    this.notesInQueue.push({ note: beatNumber, time: time });

    const noteResolution = this.beat;

    // depending on beat
    if (noteResolution === "16beat" && beatNumber % 3) {
      return;
    }

    if (noteResolution === "8beat" && beatNumber % 6) {
      return;
    }

    if (noteResolution === "4beat" && beatNumber % 12) {
      return;
    }

    if (noteResolution === "Triplet" && beatNumber % 4) {
      return;
    }

    const oscillator = this.audioCtx.createOscillator();
    oscillator.type = "square";
    oscillator.connect(this.audioCtx.destination);

    if (noteResolution === "Triplet") {
      if (beatNumber % 48 === 0) {
        oscillator.frequency.value = 880;
      } else if (beatNumber % 6 === 0) {
        oscillator.frequency.value = 440;
      } else {
        oscillator.frequency.value = 320;
      }
    } else {
      if (beatNumber % 48 === 0) {
        // beat 0 == high pitch
        oscillator.frequency.value = 880;
      } else if (beatNumber % 4 === 0) {
        // quarter notes = medium pitch
        oscillator.frequency.value = 440;
      } else {
        // other 16th notes = low pitch
        oscillator.frequency.value = 320;
      }
    }

    oscillator.start(time);
    oscillator.stop(time + this.noteLength);
  }

  /**
   * 16th note to advance the current note and time
   */
  private nextNote(): void {
    const secondsPerBeat = 20 / this.tempo;

    this.nextNoteTime += 0.25 * secondsPerBeat;
    this.current16thNote++;

    if (this.current16thNote === 48) {
      this.current16thNote = 0;
    }
  }

  /**
   * Initialize the metronome
   */
  public componentDidMount() {
    this.audioCtx = new AudioContext();
    requestAnimationFrame(this._draw.bind(this)); // start the drawing loop.

    this.timerWorker = new Worker("/static/js/metronome.worker.js");

    this.timerWorker.onmessage = (e) => {
      if (e.data === "tick") {
        this.scheduler();
      } else {
        console.log(`message: ${e.data}`);
      }
    };

    this.timerWorker.postMessage({
      interval: this.lookahead,
    });
  }

  /**
   * Stop the metronome
   */
  public componentWillUnmount() {
    if (!this.timerWorker) {
      throw new Error("timerWorker is not defined");
    }

    this.timerWorker.postMessage("stop");
    this.timerWorker.terminate();
    this.status = "off";
  }
}
