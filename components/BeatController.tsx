/* eslint-disable */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { updateBeat } from '../actions';
import { Beats } from '../reducers/updateBeat';

interface IProps {
  updateBeat: (value: string) => void;
  beat: string;
}

class BeatController extends PureComponent<IProps> {
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
      <Select
        onChange={this._handleBeatSelectChange.bind(this)}
        value={this.props.beat}
      >
        {options}
      </Select>
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

const Select = styled.select`
  padding: 5px;
  border: none;
  font-size: 1rem;
  margin: 0 auto 0.5em;
  display: block;
  text-align: center;
  appearance: none;
  cursor: pointer;
  background: none;
  color: #fff;
  font-family: inherit;
`;
