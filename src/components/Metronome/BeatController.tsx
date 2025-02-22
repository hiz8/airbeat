import { useContext, useMemo, type JSX, type Key } from "react";
import {
  Button,
  ListBoxItem,
  ListBox,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";
import { ChevronDown as IconDown } from "react-feather";

import { Beats } from "../../lib/metoronome";
import { BeatContext, BeatDispatchContext } from "../../hooks/useMetoronome";

import * as styles from "./BeatController.css";

export function BeatController(): JSX.Element {
  const beat = useContext(BeatContext);
  const updateBeat = useContext(BeatDispatchContext);

  const openMenuAudio = useMemo(() => new Audio('/static/audio/transition_up.wav'), []);
  const closeMenuAudio = useMemo(() => new Audio('/static/audio/transition_down.wav'), []);

  function handlePressButton(isOpen: boolean) {
    if (isOpen) {
      openMenuAudio.play();
    } else {
      closeMenuAudio.play();
    }
  }

  function handleBeatSelectChange(key: Key) {
    if (updateBeat) {
      updateBeat(key as Beats);
    }
  }

  const options = Object.values(Beats).map((value) => (
    <ListBoxItem id={value} className={styles.listItem} key={value}>
      {value}
    </ListBoxItem>
  ));

  return (
    <Select
      selectedKey={beat}
      onSelectionChange={handleBeatSelectChange}
      onOpenChange={handlePressButton}
      aria-label="Set the beat"
      className={styles.select}
    >
      <Button className={styles.button}>
        <SelectValue /> <IconDown size={18} />
      </Button>
      <Popover
        className={({ isEntering, isExiting }) =>
          `${styles.popover} ${isEntering ? styles.popoverEntering : ""} ${
            isExiting ? styles.popoverExiting : ""
          }`
        }
      >
        <ListBox className={styles.listBox}>{options}</ListBox>
      </Popover>
    </Select>
  );
}
