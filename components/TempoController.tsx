/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateTempo } from '../actions';

import { merge, fromEvent } from 'rxjs';
import { map, mapTo, scan, filter } from 'rxjs/operators';

interface IProps {
  updateTempo: (value: number) => void;
  tempo: number;
}

class TempoController extends Component<IProps> {
  constructor(props) {
    super(props);
  }

  public componentDidMount() {
    const plusButton: HTMLElement = document.getElementById('plus');
    const minusButton: HTMLElement = document.getElementById('minus');

    const plusStream = fromEvent(plusButton, 'click').pipe(mapTo(1));
    const minusStream = fromEvent(minusButton, 'click').pipe(mapTo(-1));

    const clickStream = merge(plusStream, minusStream);

    merge(clickStream)
      .pipe(
        scan((acc, curr) => {
          if (curr >= 2) {
            return parseInt(curr.toString(), 10);
          } else {
            const math = acc + curr;
            if (40 > math || math > 208) {
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
