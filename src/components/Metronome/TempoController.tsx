import { useState, useEffect, useRef, useContext, ReactNode } from 'react';
import { useButton } from '@react-aria/button';

import { TempoContext, TempoDispatchContext } from '../../hooks/useMetoronome';

import { TempoSlider } from './TempoSlider';
import * as styles from './TempoController.css';

const MAXIMUM_TEMPO = 208;
const MINIMUM_TEMPO = 40;

export function TempoController(): JSX.Element {
  const tempo = useContext(TempoContext);
  const updateTempo = useContext(TempoDispatchContext);
  const [pressMinus, setPressMinus] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (tempo === MINIMUM_TEMPO || !updateTempo || !pressMinus) {
        clearInterval(id);
      } else {
        updateTempo(tempo - 1);
      }
    }, 50);
    return () => clearInterval(id);
  }, [updateTempo, tempo, pressMinus]);

  const [pressPlus, setPressPlus] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (tempo === MAXIMUM_TEMPO || !updateTempo || !pressPlus) {
        clearInterval(id);
      } else {
        updateTempo(tempo + 1);
      }
    }, 50);
    return () => clearInterval(id);
  }, [updateTempo, tempo, pressPlus]);

  function _handleChangeEvent2(value: number[]): void {
    if (updateTempo) {
      updateTempo(value[0]);
    }
  }

  function handlePressMinusButton(isPressed: boolean): void {
    setPressMinus(isPressed);
  }

  function handlePressPlusButton(isPressed: boolean): void {
    setPressPlus(isPressed);
  }

  return (
    <div className={styles.controller}>
      <Button onPress={handlePressMinusButton} className={styles.minusButton}>
        Minus
      </Button>
      <TempoSlider
        aria-label="Opacity"
        maxValue={MAXIMUM_TEMPO}
        minValue={MINIMUM_TEMPO}
        defaultValue={[120]}
        step={1}
        value={[tempo]}
        onChange={_handleChangeEvent2}
      />
      <Button onPress={handlePressPlusButton} className={styles.plusButton}>
        Plus
      </Button>
    </div>
  );
}

type ButtonProps = {
  children: ReactNode;
  onPress: (isPressed: boolean) => void;
  className: string;
};
function Button({ onPress, className, ...props }: ButtonProps) {
  const { children } = props;
  const ref = useRef(null);
  const { buttonProps, isPressed } = useButton(
    {
      ...props,
      elementType: 'span',
    },
    ref,
  );

  useEffect(() => {
    onPress(isPressed);
  }, [onPress, isPressed]);

  return (
    <button {...buttonProps} className={className} ref={ref}>
      {children}
    </button>
  );
}
