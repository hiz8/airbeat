import { useState, useContext } from 'react';
import { Save as IconSave } from 'react-feather';

import ListItems from './ListItems';
import ListStore from '../../model/list';
import {BeatContext, BeatDispatchContext, TempoContext} from "../../hooks/useMetoronome";
import {ListDispatchContext} from "../../hooks/useList";

import * as styles from "./List.css";

const listStore = new ListStore();

export default function List(): JSX.Element {
  const [name, setName] = useState('');
  const [saveButton, setSaveButton] = useState(false);
  const [items, setItems] = useState(null);
  const tempo = useContext(TempoContext);
  const beat = useContext(BeatContext);
  const updateBeat = useContext(BeatDispatchContext);
  const toggleVisible = useContext(ListDispatchContext);

  function handleChangeEvent(e) {
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
      .then(res => {
        setItems(res);
      })
      .catch(err => {
        console.error(err);
      });
  }

  function saveItem(e) {
    e.preventDefault();

    const input = e.target.name;

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
      .catch(err => {
        console.error(err);
      });
  }

  function deleteItem(e) {
    const key = e.target.dataset.key;

    if (confirm('Delete the item?')) {
      listStore
        .removeItem(key)
        .then(() => {
          updateItems();
        })
        .catch(err => {
          console.error(err);
        });
    }
  }

  function setItem(e) {
    e.preventDefault();

    const { tempo, beat } = e.currentTarget.dataset;

    updateBeat(beat);
    toggleVisible();

    const event = new CustomEvent('input');
    const tempoInput: any = document.getElementById('range');
    tempoInput.value = tempo;
    tempoInput.dispatchEvent(event);
  }

  const list: Array<any> = [];

  if (items) {
    Object.keys(items).forEach((key, i) => {
      list.push(
        <ListItems
          key={i}
          itemKey={key}
          name={items[key].name}
          tempo={items[key].tempo}
          beat={items[key].beat}
          setItem={setItem}
          deleteItem={deleteItem.bind(this)}
        />,
      );
    });
  } else {
    updateItems();
  }

  return (
    <ul className={styles.listWrapper}>
      <li className={styles.listItem}>
        <form id="save" onSubmit={saveItem.bind(this)} />
        <span className={styles.listItemInfo}>
          <input
            name="name"
            form="save"
            placeholder="Save as..."
            onChange={handleChangeEvent.bind(this)}
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
            <IconSave />
          </button>
        </span>
      </li>
      {list}
    </ul>
  );
}
