/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateRunStatus } from '../actions';

const notesInQueue = [];
const noteLength = 0.05;
const lookahead = 25.0;

let nextNoteTime: number = 0.0;
let scheduleAheadTime: number = 0.1;
let current16thNote: number;
let audioCtx: AudioContext;
let timerWorker: Worker;

interface IProps {
  updateRunStatus: () => void;
  runStatus: boolean;
}

class UpdatePlaying extends Component<IProps> {
  private readonly beat = '8beat';
  private readonly tempo = 120;

  constructor(props) {
    super(props);
  }

  private _handleButtonClick = () => {
    const { runStatus } = this.props;

    if (runStatus) {
      // start playing
      timerWorker.postMessage('stop');
    } else {
      current16thNote = 0;
      nextNoteTime = audioCtx.currentTime;
      timerWorker.postMessage('start');
    }

    this.props.updateRunStatus();
  };

  private _scheduler() {
    // console.log('in scheduler');
    // 次の区間の前に演奏する必要がある音符がある間、
    // それらをスケジュールし、ポインタを前進させます。

    while (nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
      this._scheduleNote(current16thNote, nextNoteTime);
      this._nextNote();
    }
  }

  private _scheduleNote(beatNumber, time) {
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

  private _nextNote() {
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
        this._scheduler();
      } else {
        console.log('message: ' + e.data);
      }
    };

    timerWorker.postMessage({
      interval: lookahead,
    });
  }

  public render() {
    const { runStatus } = this.props;
    const runStatusText = runStatus ? '停止' : '再生';

    return <button onClick={this._handleButtonClick}>{runStatusText}</button>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateRunStatus: bindActionCreators(updateRunStatus, dispatch),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(UpdatePlaying);
