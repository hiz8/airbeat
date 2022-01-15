import { useContext } from 'react';
import type { ChangeEvent } from 'react';
import {
  BeatContext,
  BeatDispatchContext,
  Beats,
} from '../../hooks/useMetoronome';

import * as styles from './BeatController.css';

export function BeatController(): JSX.Element {
  const beat = useContext(BeatContext);
  const updateBeat = useContext(BeatDispatchContext);

  function handleBeatSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    if (updateBeat) {
      updateBeat(e.target.value as Beats);
    }
  }

  const options = [];

  for (let i in Beats) {
    options.push(
      // @ts-ignore
      <option value={Beats[i]} key={i}>
        {/** @ts-ignore */}
        {Beats[i]}
      </option>,
    );
  }

  return (
    <select
      onChange={handleBeatSelectChange}
      value={beat}
      aria-label="Set the beat"
      className={styles.select}
    >
      {options}
    </select>
  );
}
