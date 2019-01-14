/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateBeat } from '../actions';

interface IProps {
  updateBeat: (value: string) => void;
}

class BeatController extends Component<IProps> {
  constructor(props) {
    super(props);
  }

  private _handleBeatSelectChange(e) {
    this.props.updateBeat(e.target.value);
  }

  public render() {
    return (
      <>
        <select onChange={this._handleBeatSelectChange.bind(this)}>
          <option value="4beat">𝅘𝅥 4 beat</option>
          <option value="8beat">𝅘𝅥𝅮 8 beat</option>
          <option value="16beat">𝅘𝅥𝅯 16 beat</option>
        </select>
      </>
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
