import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import color from '../../const/color';
import { actions, Beats } from '../../modules/metronome';
import * as styles from "./Metronome.css";

interface IProps {
  updateRunStatus: () => void;
  runStatus: boolean;
  tempo: number;
  beat: Beats;
}

class UpdatePlaying extends PureComponent<IProps> {
  private readonly notesInQueue = [];
  private readonly noteLength = 0.05;
  private readonly lookahead = 25.0;
  private last16thNoteDrawn = -1; // the last "box" we drew on the screen / 最後に画面上に描いた "ボックス"

  private nextNoteTime: number = 0.0;
  private scheduleAheadTime: number = 0.1;
  private current16thNote: number;

  private audioCtx: AudioContext;
  private timerWorker: Worker;

  private readonly playButton: React.RefObject<HTMLButtonElement>;

  constructor(props) {
    super(props);

    this.playButton = React.createRef<HTMLButtonElement>();
  }

  private _draw() {
    let currentNote = this.last16thNoteDrawn;
    const currentTime = this.audioCtx.currentTime;
    const button = this.playButton.current || null;

    while (
      this.notesInQueue.length &&
      this.notesInQueue[0].time < currentTime
    ) {
      currentNote = this.notesInQueue[0].note;
      this.notesInQueue.splice(0, 1); // remove note from queue / キューからメモを削除する
    }

    // We only need to draw if the note has moved.
    // ノートが移動した場合にのみ描画する必要があります。
    if (this.last16thNoteDrawn != currentNote) {
      this.last16thNoteDrawn = currentNote;

      if (currentNote % 12 === 0) {
        const activeColor =
          currentNote === 0 ? color.SECONDARY : color.TERTIARY;
        button.animate(
          [
            {
              backgroundColor: activeColor,
              easing: 'steps(1, start)',
            },
            { backgroundColor: activeColor, easing: 'linear' },
          ],
          {
            duration: 20000 / this.props.tempo,
            iterations: 1,
          },
        );
      }
    }

    // set up to draw again / 再び描画するように設定する
    requestAnimationFrame(this._draw.bind(this));
  }

  private _handleButtonClick = () => {
    const { runStatus } = this.props;

    if (runStatus) {
      // start playing
      this.timerWorker.postMessage('stop');
    } else {
      this.timerWorker.postMessage('start');
      setTimeout(() => {
        this.current16thNote = 0;
        this.nextNoteTime = this.audioCtx.currentTime;
      }, 10);
    }

    this.props.updateRunStatus();
  };

  /**
   * 次の区間の前に演奏する必要がある音符がある間、それらをスケジュールし、ポインタを前進させます。
   */
  private _scheduler(): void {
    while (
      this.nextNoteTime <
      this.audioCtx.currentTime + this.scheduleAheadTime
    ) {
      this._scheduleNote(this.current16thNote, this.nextNoteTime);
      this._nextNote();
    }
  }

  /**
   * テンポに応じて音を出す
   *
   * @param beatNumber
   * @param time
   */
  private _scheduleNote(beatNumber: number, time: number): void {
    /**
     * 出す音のコントロール
     */
    this.notesInQueue.push({ note: beatNumber, time: time });

    const noteResolution = this.props.beat;

    // beat に応じて
    if (noteResolution === '16beat' && beatNumber % 3) {
      return;
    }

    if (noteResolution === '8beat' && beatNumber % 6) {
      return;
    }

    if (noteResolution === '4beat' && beatNumber % 12) {
      return;
    }

    if (noteResolution === 'Triplet' && beatNumber % 4) {
      return;
    }

    const oscillator = this.audioCtx.createOscillator();
    oscillator.type = 'square';
    oscillator.connect(this.audioCtx.destination);

    if (noteResolution === 'Triplet') {
      if (beatNumber % 48 === 0) {
        oscillator.frequency.value = 880.0;
      } else if (beatNumber % 6 === 0) {
        oscillator.frequency.value = 440.0;
      } else {
        oscillator.frequency.value = 320.0;
      }
    } else {
      if (beatNumber % 48 === 0) {
        // beat 0 == high pitch
        oscillator.frequency.value = 880.0;
      } else if (beatNumber % 4 === 0) {
        // quarter notes = medium pitch / 四分音符=中音域
        oscillator.frequency.value = 440.0;
      } else {
        // other 16th notes = low pitch / その他の16th notes =ロー・ピッチ
        oscillator.frequency.value = 320.0;
      }
    }

    oscillator.start(time);
    oscillator.stop(time + this.noteLength);
  }

  /**
   * 16分音符で現在のノートと時間を進める
   */
  private _nextNote(): void {
    let secondsPerBeat = 20 / this.props.tempo;

    this.nextNoteTime += 0.25 * secondsPerBeat;
    this.current16thNote++;

    if (this.current16thNote === 48) {
      this.current16thNote = 0;
    }
  }

  public componentDidMount() {
    // For Safari
    (window as any).AudioContext =
      (window as any).AudioContext || (window as any).webkitAudioContext;

    this.audioCtx = new AudioContext();
    requestAnimationFrame(this._draw.bind(this)); // start the drawing loop.

    this.timerWorker = new Worker('/static/js/metronome.worker.js');

    this.timerWorker.onmessage = e => {
      if (e.data == 'tick') {
        this._scheduler();
      } else {
        console.log('message: ' + e.data);
      }
    };

    this.timerWorker.postMessage({
      interval: this.lookahead,
    });
  }

  public componentWillUnmount() {
    this.timerWorker.postMessage('stop');
    this.timerWorker.terminate();
    this.props.updateRunStatus();
  }

  public render() {
    const { runStatus } = this.props;
    const runStatusText = runStatus ? 'Stop' : 'Play';

    return (
      <button
        onClick={this._handleButtonClick}
        ref={this.playButton}
        className={styles.button[runStatus ? "active": "passive"]}
      >
        {runStatusText}
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateRunStatus: bindActionCreators(actions.updateRunStatus, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(UpdatePlaying);
