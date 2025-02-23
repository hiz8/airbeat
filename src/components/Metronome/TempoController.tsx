import { useState, useEffect, useContext, useRef, type JSX } from "react";
import { Button } from "react-aria-components";

import { TempoContext, TempoDispatchContext } from "../../hooks/useMetoronome";
import { audioPlayer } from "../../lib/audio";

import { TempoSlider } from "./TempoSlider";
import * as styles from "./TempoController.css";

const MAXIMUM_TEMPO = 208;
const MINIMUM_TEMPO = 40;

export function TempoController(): JSX.Element {
  const tempo = useContext(TempoContext);
  const updateTempo = useContext(TempoDispatchContext);
  const [pressMinus, setPressMinus] = useState(false);
  const [pressPlus, setPressPlus] = useState(false);
  const soundCounter = useRef(0);

  const resetAndPlaySound = () => {
    soundCounter.current = 0;
    audioPlayer.play("tap");
  };

  const conditionalPlaySound = () => {
    soundCounter.current++;
    if (soundCounter.current > 0 && soundCounter.current % 2 === 0) {
      audioPlayer.play("tap");
    }
  };

  useEffect(() => {
    audioPlayer.preload(["tap"]);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (tempo === MINIMUM_TEMPO || !updateTempo || !pressMinus) {
        clearInterval(id);
      } else {
        updateTempo(tempo - 1);
        conditionalPlaySound();
      }
    }, 50);
    return () => clearInterval(id);
  }, [updateTempo, tempo, pressMinus]);

  useEffect(() => {
    const id = setInterval(() => {
      if (tempo === MAXIMUM_TEMPO || !updateTempo || !pressPlus) {
        clearInterval(id);
      } else {
        updateTempo(tempo + 1);
        conditionalPlaySound();
      }
    }, 50);
    return () => clearInterval(id);
  }, [updateTempo, tempo, pressPlus]);

  function handleChangeEvent(value: number[]): void {
    if (updateTempo) {
      updateTempo(value[0]);
      conditionalPlaySound();
    }
  }

  function handlePressMinusButton(isPressed: boolean): void {
    setPressMinus(isPressed);
    if (isPressed) resetAndPlaySound();
  }

  function handlePressPlusButton(isPressed: boolean): void {
    setPressPlus(isPressed);
    if (isPressed) resetAndPlaySound();
    soundCounter.current = 0;
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
