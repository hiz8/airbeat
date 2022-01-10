import { useEffect, useRef, useContext } from 'react';
import {
  StatusContext,
  StatusDispatchContext,
} from '../../hooks/useMetoronome';
import * as styles from './PlayButton.css';

export function PlayButton() {
  const status = useContext(StatusContext);
  const { start, stop, init } = useContext(StatusDispatchContext);
  const playButton = useRef<HTMLButtonElement>();

  useEffect(() => {
    init(playButton.current);
  }, []);

  function handleButtonClick() {
    if (status === 'on') {
      stop();
    } else {
      start();
    }
  }

  const runStatusText = status === 'on' ? 'Stop' : 'Play';

  return (
    <button
      onClick={handleButtonClick}
      ref={playButton}
      className={styles.button[status === 'on' ? 'playing' : 'pause']}
    >
      {runStatusText}
    </button>
  );
}
