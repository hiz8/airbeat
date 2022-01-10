import { Trash as IconTrash } from 'react-feather';

import * as styles from './ListItems.css';

interface IProps {
  itemKey: string;
  beat: string;
  tempo: string;
  name: string;
  setItem: (e: any) => void;
  deleteItem: () => void;
}

export const ListItems = (props: IProps): JSX.Element => {
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
