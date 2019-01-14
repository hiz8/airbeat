/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateTempo } from '../actions';

import { merge, fromEvent } from 'rxjs';
import { map, mapTo, scan } from 'rxjs/operators';

interface IProps {
  updateTempo: (value: number) => void;
  tempo: number;
}

class TempoController extends Component<IProps> {
  private readonly MAXIMUM_TEMPO = 208;
  private readonly MINIMUM_TEMPO = 40;

  constructor(props) {
    super(props);
  }

  private _handleChangeEvent(): void {}

  public componentDidMount() {
    /**
     * プラス・マイナスボタンのクリックイベントからストリームを生成
     */
    const plusButton: HTMLElement = document.getElementById('plus');
    const plusStream = fromEvent(plusButton, 'click').pipe(mapTo(1));
    const minusButton: HTMLElement = document.getElementById('minus');
    const minusStream = fromEvent(minusButton, 'click').pipe(mapTo(-1));

    const clickStream = merge(plusStream, minusStream);

    /**
     * Range input の操作からストリームを生成
     */
    const rangeInput = document.getElementById('range');
    const rangeInputStream = fromEvent(rangeInput, 'input').pipe(
      map((val: any) => {
        return val.target.value;
      }),
    );

    /**
     * ストリームをマージし、stateの更新へ
     */
    merge(clickStream, rangeInputStream)
      .pipe(
        scan((acc, curr) => {
          if (curr >= 2) {
            return parseInt(curr.toString(), 10);
          } else {
            const math = acc + curr;

            if (this.MINIMUM_TEMPO > math || math > this.MAXIMUM_TEMPO) {
              return acc;
            } else {
              return math;
            }
          }
        }, this.props.tempo),
      )
      .subscribe(value => {
        this.props.updateTempo(value);
      });
  }

  public render() {
    return (
      <>
        <button type="button" id="plus">
          プラス
        </button>
        <button type="button" id="minus">
          マイナス
        </button>

        <input
          id="range"
          type="range"
          min={this.MINIMUM_TEMPO}
          max={this.MAXIMUM_TEMPO}
          step="1"
          value={this.props.tempo}
          onChange={this._handleChangeEvent}
        />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateTempo: bindActionCreators(updateTempo, dispatch),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(TempoController);
