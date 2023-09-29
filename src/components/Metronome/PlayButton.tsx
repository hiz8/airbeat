import { useEffect, useRef, useContext } from 'react';
import { ToggleButton } from 'react-aria-components';
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

  const isSelected = status === 'on';

  function handleButtonClick() {
    if (!actions) {
      return;
    }
    if (isSelected) {
      actions.stop();
    } else {
      actions.start();
    }
  }

  return (
    <ToggleButton
      onPress={handleButtonClick}
      ref={playButton}
      isSelected={isSelected}
      className={styles.button[isSelected ? 'playing' : 'pause']}
    >
      {isSelected ? 'Stop' : 'Play'}
    </ToggleButton>
  );
}
