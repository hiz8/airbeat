import type { MouseEvent } from 'react';
import { Trash as IconTrash } from 'react-feather';

import * as styles from './ListItems.css';

export interface ListItemProps {
  itemKey: string;
  beat: string;
  tempo: number;
  name: string;
  setItem: (e: MouseEvent<HTMLSpanElement>) => void;
  deleteItem: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const ListItems = (props: ListItemProps): JSX.Element => {
  return (
    <li className={styles.itemWrapper}>
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
        <button
          data-key={props.itemKey}
          onClick={props.deleteItem}
          className={styles.listItemControlleDelete}
        >
          <IconTrash className={styles.listItemControlleDeleteInnerSvg} />
        </button>
      </span>
    </li>
  );
};
