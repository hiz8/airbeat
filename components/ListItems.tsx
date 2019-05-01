import * as React from 'react';
import styled from 'styled-components';
import IconTrash from 'react-feather/dist/icons/trash';

export default (props): any => {
  return (
    <ItemWrapper>
      <ListItemInfo
        onClick={props.setItem}
        data-tempo={props.tempo}
        data-beat={props.beat}
      >
        <ListItemInfoName>{props.name}</ListItemInfoName>
        <ListItemInfoTempo>
          BPM:
          {props.tempo}
        </ListItemInfoTempo>
        <ListItemInfoBeat>{props.beat}</ListItemInfoBeat>
      </ListItemInfo>
      <ListItemControlle>
        <ListItemControlleDelete
          data-key={props.name}
          onClick={props.deleteItem}
        >
          <IconTrash />
        </ListItemControlleDelete>
      </ListItemControlle>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.li`
  color: #fff;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const ListItemInfo = styled.span`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  padding: 0.25em 0.5em;
  box-sizing: border-box;
  flex: 1;
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
`;

const ListItemInfoName = styled.span`
  width: 100%;
  margin-bottom: 0.1em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ListItemInfoTempo = styled.span`
  font-size: 0.8rem;
  width: 75px;
`;

const ListItemInfoBeat = styled.span`
  font-size: 0.8rem;
`;

const ListItemControlle = styled.span`
  display: flex;
  align-items: center;
`;

const ListItemControlleDelete = styled.button`
  background: none;
  border: none;
  color: #fff;
  padding: 0;
  width: 44px;
  height: 44px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }

  svg {
    pointer-events: none;
  }
`;
