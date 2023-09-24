import { useState, useContext } from 'react';
import type { ChangeEvent, SyntheticEvent, MouseEvent, FormEvent } from 'react';
import { Save as IconSave } from 'react-feather';

import { ListItems } from './ListItems';
import { List as ListStore, Set } from '../../model/list';
import type { Beats } from '../../lib/metoronome';
import {
  BeatContext,
  BeatDispatchContext,
  TempoDispatchContext,
  TempoContext,
} from '../../hooks/useMetoronome';
import { ListDispatchContext } from '../../hooks/useList';
import color from '../../const/color';

import * as styles from './List.css';

const listStore = new ListStore();

export function List(): JSX.Element {
  const [name, setName] = useState('');
  const [saveButton, setSaveButton] = useState(false);
  const [items, setItems] = useState<Record<string, Set>>({});
  const tempo = useContext(TempoContext);
  const beat = useContext(BeatContext);
  const updateBeat = useContext(BeatDispatchContext);
  const updateTempo = useContext(TempoDispatchContext);
  const toggleVisible = useContext(ListDispatchContext);

  function handleChangeEvent(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length) {
      setName(e.target.value);
      setSaveButton(true);
    } else {
      setName('');
      setSaveButton(false);
    }
  }

  function updateItems() {
    listStore
      .getItems()
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function saveItem(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const input = e.currentTarget;

    listStore
      .setItem({
        name,
        tempo,
        beat,
      })
      .then(() => {
        updateItems();
        input.value = '';
        input.blur();
        setSaveButton(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function deleteItem(e: SyntheticEvent<EventTarget>) {
    if (!(e.target instanceof HTMLButtonElement)) {
      return;
    }

    const key = e.target.dataset.key;

    if (key && confirm('Delete the item?')) {
      listStore
        .removeItem(key)
        .then(() => {
          updateItems();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  function setItem(e: MouseEvent<HTMLSpanElement>) {
    e.preventDefault();

    const { tempo, beat } = e.currentTarget.dataset;

    // Update the beat and tempo
    if (tempo && beat && updateBeat && updateTempo && toggleVisible) {
      updateBeat(beat as Beats);
      updateTempo(parseInt(tempo, 10));
      toggleVisible();
    }
  }

  const list: JSX.Element[] = [];

  if (Object.keys(items).length) {
    Object.keys(items).forEach((key, i) => {
      list.push(
        <ListItems
          key={i}
          itemKey={key}
          name={items[key].name}
          tempo={items[key].tempo}
          beat={items[key].beat}
          setItem={setItem}
          deleteItem={deleteItem}
        />,
      );
    });
  } else {
    updateItems();
  }

  return (
    <ul className={styles.listWrapper}>
      <li className={styles.listItem}>
        <form id="save" onSubmit={saveItem} />
        <span className={styles.listItemInfo}>
          <input
            name="name"
            form="save"
            placeholder="Save as..."
            onChange={handleChangeEvent}
            className={styles.listItemInfoNameInput}
          />
          <span className={styles.listItemInfoTempo}>BPM:{tempo}</span>
          <span className={styles.listItemInfoBeat}>{beat}</span>
        </span>
        <span className={styles.listItemControlle}>
          <button
            form="save"
            type="submit"
            disabled={!saveButton}
            className={styles.listItemControlleSave}
          >
            <IconSave color={color.FONT} />
          </button>
        </span>
      </li>
      {list}
    </ul>
  );
}
