/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePlaying } from '../actions';

const notesInQueue: any[] = [];
const noteLength: number = 0.05;
let nextNoteTime: number = 0.0;
let scheduleAheadTime: number = 0.1;
let current16thNote: number;
let audioCtx;
let timerWorker;

let last16thNoteDrawn = -1; // the last "box" we drew on the screen / 最後に画面上に描いた "ボックス"

interface IProps {
  updatePlaying: () => void;
  playing: boolean;
}

interface IState {
  lookahead: number;
}

class UpdatePlaying extends Component<IProps, IState> {
  private readonly beat = '8beat';
  private readonly tempo = 120;

  constructor(props) {
    super(props);

    this.state = {
      lookahead: 25.0,
    };
  }

  private updatePlaying = () => {
    const { playing } = this.props;

    if (playing) {
      // start playing
      timerWorker.postMessage('stop');
    } else {
      current16thNote = 0;
      nextNoteTime = audioCtx.currentTime;
      timerWorker.postMessage('start');
    }

    this.props.updatePlaying();
  };

  private scheduler() {
    // console.log('in scheduler');
    // 次の区間の前に演奏する必要がある音符がある間、
    // それらをスケジュールし、ポインタを前進させます。

    while (nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
      this.scheduleNote(current16thNote, nextNoteTime);
      this.nextNote();
    }
  }

  private scheduleNote(beatNumber, time) {
    /**
     * 出す音のコントロール
     */
    notesInQueue.push({ note: beatNumber, time: time });

    const noteResolution = this.beat;

    // beat に応じて
    if (noteResolution === '8beat' && beatNumber % 2) {
      return;
    }

    if (noteResolution === '4beat' && beatNumber % 4) {
      return;
    }

    const oscillator = audioCtx.createOscillator();
    oscillator.connect(audioCtx.destination);

    if (beatNumber % 16 === 0) {
      // beat 0 == high pitch
      oscillator.frequency.value = 880.0;
    } else if (beatNumber % 4 === 0) {
      // quarter notes = medium pitch / 四分音符=中音域
      oscillator.frequency.value = 440.0;
    } else {
      // other 16th notes = low pitch / その他の16th notes =ロー・ピッチ
      oscillator.frequency.value = 320.0;
    }

    oscillator.start(time);
    oscillator.stop(time + noteLength);
  }

  private nextNote() {
    // 16分音符で現在のノートと時間を進める...
    let secondsPerBeat = 60.0 / this.tempo;

    nextNoteTime += 0.25 * secondsPerBeat;
    current16thNote++;

    if (current16thNote == 16) {
      current16thNote = 0;
    }
  }

  public componentDidMount() {
    audioCtx = new AudioContext();

    timerWorker = new Worker('/static/js/metronome.worker.js');

    timerWorker.onmessage = e => {
      if (e.data == 'tick') {
        this.scheduler();
      } else {
        console.log('message: ' + e.data);
      }
    };

    timerWorker.postMessage({
      interval: this.state.lookahead,
    });
  }

  public render() {
    const { playing } = this.props;
    const playText = playing ? '停止' : '再生';

    return <button onClick={this.updatePlaying}>{playText}</button>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updatePlaying: bindActionCreators(updatePlaying, dispatch),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(UpdatePlaying);
