import { MouseEvent, useContext } from 'react';
import Link from 'next/link';
import {
  List as IconListOpen,
  X as IconListClose,
  Info as IconInfo,
} from 'react-feather';
import { ListContext, ListDispatchContext } from '../hooks/useList';

import * as styles from './AppBar.css';

export function AppBar(): JSX.Element {
  const visible = useContext(ListContext);
  const toggleVisible = useContext(ListDispatchContext);

  function handleListButtonClick(e: MouseEvent) {
    e.preventDefault();

    if (toggleVisible) {
      toggleVisible();
    }
  }

  const IconList = visible ? <IconListClose /> : <IconListOpen />;
  const labelText = visible ? 'Close set list' : 'Open set list';

  return (
    <div className={styles.navBar}>
      <Link href="/info" passHref>
        <a className={styles.infoButton}>
          <IconInfo color="white" />
        </a>
      </Link>
      <button
        type="button"
        onClick={handleListButtonClick}
        aria-label={labelText}
        title={labelText}
        className={styles.listButton}
      >
        {IconList}
      </button>
    </div>
  );
}
