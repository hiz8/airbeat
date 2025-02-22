import { useContext, type JSX } from "react";
import { List as IconListOpen, Info as IconInfo } from "react-feather";
import { Button, Link, DialogTrigger } from "react-aria-components";

import { List } from "../components/List/List";
import { ListContext, ListDispatchContext } from "../hooks/useList";
import color from "../const/color";

import * as styles from "./AppBar.css";

export function AppBar(): JSX.Element {
  const visible = useContext(ListContext);
  const toggleVisible = useContext(ListDispatchContext);

  function handleListButtonClick() {
    if (toggleVisible) {
      toggleVisible();
    }
  }

  const labelText = visible ? "Close set list" : "Open set list";

  return (
    <div className={styles.navBar}>
      <Link href="/info" className={styles.infoButton}>
        <IconInfo color={color.FONT} />
      </Link>
      <DialogTrigger>
        <Button
          type="button"
          onPress={handleListButtonClick}
          aria-label={labelText}
          className={styles.listButton}
        >
          <IconListOpen color={color.FONT} />
        </Button>
        <List />
      </DialogTrigger>
    </div>
  );
}
