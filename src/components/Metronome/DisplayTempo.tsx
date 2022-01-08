import React from 'react';
import * as styles from "./DisplayTempo.css";

interface IProps {
  tempo: number;
}

export default React.memo(
  (props: IProps) => {
    return (
      <div className={styles.outputTempo}>
        <output className={styles.outputTempoValue}>{props.tempo}</output>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.tempo === nextProps.tempo;
  },
);
