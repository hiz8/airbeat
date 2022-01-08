import React from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { actions } from '../modules/ui';
import {
  List as IconListOpen,
  X as IconListClose,
  Info as IconInfo,
} from 'react-feather';
import * as styles from "./AppBar.css";

interface IProps {
  listDisplayStatus: boolean;
}

function AppBar(props: IProps): JSX.Element {
  const dispatch = useDispatch();

  function handleListButtonClick(e) {
    e.preventDefault();
    dispatch(actions.toggleListMenu());
  }

  const IconList = props.listDisplayStatus ? (
    <IconListClose />
  ) : (
    <IconListOpen />
  );
  const labelText = props.listDisplayStatus
    ? 'Close set list'
    : 'Open set list';

  return (
    <div className={styles.navBar}>
      <Link href="/info" passHref>
        <a className={styles.infoButton}>
          <IconInfo color="white" />
        </a>
      </Link>
      <button
        type="button"
        onClick={handleListButtonClick.bind(this)}
        aria-label={labelText}
        title={labelText}
        className={styles.listButton}
      >
        {IconList}
      </button>
    </div>
  );
}

export default React.memo(AppBar);
