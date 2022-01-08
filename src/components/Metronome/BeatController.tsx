import React from 'react';
import { useDispatch } from 'react-redux';
import { actions, Beats } from '../../modules/metronome';
import * as styles from "./BeatController.css";

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
    <select
      onChange={handleBeatSelectChange.bind(this)}
      value={props.beat}
      aria-label="Set the beat"
      className={styles.select}
    >
      {options}
    </select>
  );
}

export default React.memo(BeatController, (prevProps, nextProps) => {
  return prevProps.beat === nextProps.beat;
});
