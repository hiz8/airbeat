import { useEffect, useRef, useContext } from 'react';
import {
  StatusContext,
  StatusDispatchContext,
} from '../../hooks/useMetoronome';
import * as styles from './PlayButton.css';

export function PlayButton() {
  const status = useContext(StatusContext);
  const actions = useContext(StatusDispatchContext);
  const playButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!actions) {
      return;
    }

    actions.init(playButton.current!);
  }, []);

  function handleButtonClick() {
    if (!actions) {
      return;
    }

    if (status === 'on') {
      actions.stop();
    } else {
      actions.start();
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
