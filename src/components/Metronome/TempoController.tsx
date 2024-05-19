import { useState, useEffect, useContext } from "react";
import { Button } from "react-aria-components";

import { TempoContext, TempoDispatchContext } from "../../hooks/useMetoronome";

import { TempoSlider } from "./TempoSlider";
import * as styles from "./TempoController.css";

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

  function handleChangeEvent(value: number[]): void {
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
      <Button
        onPressChange={handlePressMinusButton}
        className={styles.minusButton}
      >
        Minus
      </Button>
      <TempoSlider
        aria-label="Opacity"
        maxValue={MAXIMUM_TEMPO}
        minValue={MINIMUM_TEMPO}
        defaultValue={[120]}
        step={1}
        value={[tempo]}
        onChange={handleChangeEvent}
      />
      <Button
        onPressChange={handlePressPlusButton}
        className={styles.plusButton}
      >
        Plus
      </Button>
    </div>
  );
}
