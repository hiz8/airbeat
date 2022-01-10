import { useContext } from 'react';
import { TempoContext } from '../../hooks/useMetoronome';

import * as styles from './DisplayTempo.css';

function DisplayTempo() {
  const tempo = useContext(TempoContext);

  return (
    <div className={styles.outputTempo}>
      <output className={styles.outputTempoValue}>{tempo}</output>
    </div>
  );
}

export default DisplayTempo;
