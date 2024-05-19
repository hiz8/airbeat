import type { MouseEvent } from "react";
import { Trash as IconTrash } from "react-feather";
import { GridListItem, Button, type PressEvent } from "react-aria-components";

import * as styles from "./ListItems.css";

export interface ListItemProps {
  itemKey: string;
  beat: string;
  tempo: number;
  name: string;
  setItem: (e: MouseEvent<HTMLSpanElement>) => void;
  deleteItem: (e: PressEvent) => void;
}

export const ListItems = (props: ListItemProps): JSX.Element => {
  return (
    <GridListItem className={styles.itemWrapper}>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: */}
      <span
        onClick={props.setItem}
        data-tempo={props.tempo}
        data-beat={props.beat}
        className={styles.listItemInfo}
      >
        <span className={styles.listItemInfoName}>{props.name}</span>
        <span className={styles.listItemInfoTempo}>
          BPM:
          {props.tempo}
        </span>
        <span className={styles.listItemInfoBeat}>{props.beat}</span>
      </span>
      <span className={styles.listItemControlle}>
        <Button
          data-key={props.itemKey}
          onPress={props.deleteItem}
          type="button"
          className={styles.listItemControlleDelete}
        >
          <IconTrash className={styles.listItemControlleDeleteInnerSvg} />
        </Button>
      </span>
    </GridListItem>
  );
};
