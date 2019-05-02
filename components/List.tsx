/* eslint-disable */
import React, { useState } from 'react';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { connect } from 'react-redux';
import IconSave from 'react-feather/dist/icons/save';

import * as actions from '../actions';
import ListItems from './ListItems';
import ListStore from '../model/list';
const listStore = new ListStore();

const mapStateToProps = state => ({
  tempo: state.updateTempo.tempo,
  beat: state.updateBeat.beat,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    updateBeat: (n: string) => dispatch(actions.updateBeat(n)),
    toggleListMenu: () => dispatch(actions.toggleListMenu()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(({ updateBeat, toggleListMenu, tempo, beat }: any) => {
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

    const input = e.target.name;

    listStore
      .setItem(name, {
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
    toggleListMenu();

    const event = new CustomEvent('input');
    const tempoInput: any = document.getElementById('range');
    tempoInput.value = tempo;
    tempoInput.dispatchEvent(event);
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
          setItem={setItem}
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
          <ListItemInfoTempo>BPM:{tempo}</ListItemInfoTempo>
          <ListItemInfoBeat>{beat}</ListItemInfoBeat>
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
