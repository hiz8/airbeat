/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import IconSave from 'react-feather/dist/icons/save';

import ListItems from './ListItems';
import ListStore from '../model/list';
const listStore = new ListStore();

export default connect(state => state)(({ updateTempo, updateBeat }: any) => {
  const [name, setName] = useState('');
  const [saveButton, setSaveButton] = useState(false);
  const [items, setItems] = useState(null);

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

    const setItam = {
      tempo: updateTempo.tempo,
      beat: updateBeat.beat,
    };

    const input = e.target.name;

    listStore
      .setItem(name, setItam)
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

  const list: Array<any> = [];

  if (items) {
    const data = items;
    Object.keys(data).forEach((name, i) => {
      list.push(
        <ListItems
          key={i}
          name={name}
          tempo={data[name].tempo}
          beat={data[name].beat}
          // setItem={this.setItem.bind(this)}
          deleteItem={deleteItem.bind(this)}
        />,
      );
    });
  } else {
    updateItems();
  }

  return (
    <ListWrapper>
      <ListItem>
        <form id="save" onSubmit={saveItem.bind(this)} />
        <ListItemInfo>
          <ListItemInfoNameInput
            name="name"
            form="save"
            placeholder="Save as..."
            onChange={handleChangeEvent.bind(this)}
          />
          <ListItemInfoTempo>BPM:{updateTempo.tempo}</ListItemInfoTempo>
          <ListItemInfoBeat>{updateBeat.beat}</ListItemInfoBeat>
        </ListItemInfo>
        <ListItemControlle>
          <ListItemControlleSave
            form="save"
            type="submit"
            disabled={!saveButton}
          >
            <IconSave />
          </ListItemControlleSave>
        </ListItemControlle>
      </ListItem>
      {list}
    </ListWrapper>
  );
});

const ListWrapper = styled.ul`
  position: absolute;
  top: 44px;
  left: 0;
  width: 100%;
  background-color: #16364b;
  min-height: calc(100vh - 44px);
  margin: 0;
  padding: 0 0 1em;
  list-style: none;
  box-sizing: border-box;
`;

const ListItem = styled.li`
  color: #fff;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const ListItemInfo = styled.span`
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 0.25em;
  box-sizing: border-box;
  flex: 1;
`;

const ListItemInfoNameInput = styled.input`
  width: 100%;
  margin-bottom: 0.1em;
  background-color: inherit;
  font-family: inherit;
  font-size: 1rem;
  color: inherit;
  border: none;
  padding: 0.5em 0.5em 0.25em;
  &:focus {
    background-color: rgba(255, 255, 255, 0.25);
  }
`;

const ListItemInfoTempo = styled.span`
  font-size: 0.8rem;
  width: 75px;
  margin-left: 0.5rem;
`;

const ListItemInfoBeat = styled.span`
  font-size: 0.8rem;
`;

const ListItemControlle = styled.span`
  display: flex;
  align-items: center;
`;

const ListItemControlleSave = styled.button`
  background: none;
  border: none;
  color: #fff;
  padding: 0;
  width: 44px;
  height: 100%;
  cursor: pointer;
  &:not(:disabled):hover {
    background-color: rgba(255, 255, 255, 0.25);
  }

  &:disabled {
    color: #aaa;
    pointer-events: none;
  }
`;
