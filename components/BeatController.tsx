/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { updateBeat } from '../actions';
import { Beats } from '../reducers/updateBeat';

interface IProps {
  updateBeat: (value: string) => void;
  beat: string;
}

const BeatController = (props: IProps) => {
  function handleBeatSelectChange(e) {
    props.updateBeat(e.target.value);
  }

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
      onChange={handleBeatSelectChange.bind(this)}
      value={props.beat}
      aria-label="Set the beat"
    >
      {options}
    </Select>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    updateBeat: bindActionCreators(updateBeat, dispatch),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(
  React.memo(BeatController, (prevProps, nextProps) => {
    return prevProps.beat === nextProps.beat;
  }),
);

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
