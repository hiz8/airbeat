import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Link from 'next/link';
import { actions } from '../modules/ui';
import {
  List as IconListOpen,
  X as IconListClose,
  Info as IconInfo,
} from 'react-feather';

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
    <NavBar>
      <Link href="/info" passHref>
        <InfoButton>
          <IconInfo color="white" />
        </InfoButton>
      </Link>
      <ListButton
        type="button"
        onClick={handleListButtonClick.bind(this)}
        aria-label={labelText}
        title={labelText}
      >
        {IconList}
      </ListButton>
    </NavBar>
  );
}

export default React.memo(AppBar);

const NavBar = styled.nav`
  display: flex;
`;
const ListButton = styled.button`
  background: none;
  border: none;
  margin-left: auto;
  width: 44px;
  height: 44px;
  line-height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
  &:focus,
  &:active {
    outline: none;
  }
`;

const InfoButton = styled.a`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
