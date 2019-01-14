/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateBeat } from '../actions';
import { Beats } from '../reducers/updateBeat';

interface IProps {
  updateBeat: (value: string) => void;
  beat: string;
}

class BeatController extends Component<IProps> {
  constructor(props) {
    super(props);
  }

  private _handleBeatSelectChange(e) {
    this.props.updateBeat(e.target.value);
  }

  public render() {
    const options = [];

    for (let i in Beats) {
      options.push(
        <option value={Beats[i]} key={i}>
          {Beats[i]}
        </option>,
      );
    }

    return (
      <select
        onChange={this._handleBeatSelectChange.bind(this)}
        value={this.props.beat}
      >
        {options}
      </select>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateBeat: bindActionCreators(updateBeat, dispatch),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(BeatController);
