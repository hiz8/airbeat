import { type MouseEvent, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  List as IconListOpen,
  X as IconListClose,
  Info as IconInfo,
} from 'react-feather';
import { ListContext, ListDispatchContext } from '../hooks/useList';
import color from '../const/color';

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

  const IconList = visible ? (
    <IconListClose color={color.FONT} />
  ) : (
    <IconListOpen color={color.FONT} />
  );
  const labelText = visible ? 'Close set list' : 'Open set list';

  return (
    <div className={styles.navBar}>
      <Link to="/info" className={styles.infoButton}>
        <IconInfo color={color.FONT} />
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
