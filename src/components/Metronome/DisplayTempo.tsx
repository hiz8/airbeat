import { useContext } from "react";
import { TempoContext } from "../../hooks/useMetoronome";

import * as styles from "./DisplayTempo.css";

export function DisplayTempo() {
  const tempo = useContext(TempoContext);

  return (
    <div className={styles.outputTempo}>
      <output className={styles.outputTempoValue}>{tempo}</output>
    </div>
  );
}
