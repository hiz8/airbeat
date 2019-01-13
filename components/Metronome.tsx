/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateRunStatus } from '../actions';

interface IProps {
  updateRunStatus: () => void;
  runStatus: boolean;
  tempo: number;
  beat: string;
}

class UpdatePlaying extends Component<IProps> {
  private readonly notesInQueue = [];
  private readonly noteLength = 0.05;
  private readonly lookahead = 25.0;

  private nextNoteTime: number = 0.0;
  private scheduleAheadTime: number = 0.1;
  private current16thNote: number;

  private audioCtx: AudioContext;
  private timerWorker: Worker;

  constructor(props) {
    super(props);
  }

  private _handleButtonClick = () => {
    const { runStatus } = this.props;

    console.log('this.props', this.props);

    if (runStatus) {
      // start playing
      this.timerWorker.postMessage('stop');
    } else {
      this.current16thNote = 0;
      this.nextNoteTime = this.audioCtx.currentTime;
      this.timerWorker.postMessage('start');
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
    if (noteResolution === '8beat' && beatNumber % 2) {
      return;
    }

    if (noteResolution === '4beat' && beatNumber % 4) {
      return;
    }

    const oscillator = this.audioCtx.createOscillator();
    oscillator.connect(this.audioCtx.destination);

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
    oscillator.stop(time + this.noteLength);
  }

  /**
   * 16分音符で現在のノートと時間を進める
   */
  private _nextNote(): void {
    let secondsPerBeat = 60.0 / this.props.tempo;

    this.nextNoteTime += 0.25 * secondsPerBeat;
    this.current16thNote++;

    if (this.current16thNote == 16) {
      this.current16thNote = 0;
    }
  }

  public componentDidMount() {
    this.audioCtx = new AudioContext();

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
