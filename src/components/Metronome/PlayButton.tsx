import { useEffect, useRef, useContext, ReactNode, RefObject } from 'react';
import { useToggleButton } from '@react-aria/button';
import { useToggleState } from '@react-stately/toggle';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      buttonRef={playButton}
      isSelected={isSelected}
    >
      {isSelected ? 'Stop' : 'Play'}
    </ToggleButton>
  );
}

type ToggleButtonProps = {
  children: ReactNode;
  buttonRef: RefObject<HTMLButtonElement>;
  onPress: (e: any) => void;
  isSelected: boolean;
};

function ToggleButton(props: ToggleButtonProps) {
  const state = useToggleState(props);
  const { buttonProps } = useToggleButton(props, state, props.buttonRef);

  return (
    <button
      {...buttonProps}
      className={styles.button[props.isSelected ? 'playing' : 'pause']}
      ref={props.buttonRef}
    >
      {props.children}
    </button>
  );
}
