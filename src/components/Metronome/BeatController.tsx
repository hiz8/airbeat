import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { actions, Beats } from '../../modules/metronome';

interface IProps {
  beat: string;
}

function BeatController(props: IProps): JSX.Element {
  const dispatch = useDispatch();

  function handleBeatSelectChange(e) {
    dispatch(actions.updateBeat(e.target.value));
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
}

export default React.memo(BeatController, (prevProps, nextProps) => {
  return prevProps.beat === nextProps.beat;
});

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
