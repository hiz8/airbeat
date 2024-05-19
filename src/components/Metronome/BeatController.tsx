import { useContext, type Key } from "react";
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
      aria-label="Set the beat"
      className={styles.select}
    >
      <Button className={styles.button}>
        <SelectValue /> <IconDown size={18} />
      </Button>
      <Popover>
        <ListBox className={styles.listBox}>{options}</ListBox>
      </Popover>
    </Select>
  );
}
