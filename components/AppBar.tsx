/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { toggleListMenu } from '../actions';
import IconList from 'react-feather/dist/icons/list';
import IconX from 'react-feather/dist/icons/x';

interface IProps {
  toggleListMenu: () => void;
  listDisplayStatus: boolean;
}

const AppBar = (props: IProps) => {
  function handleListButtonClick(e) {
    e.preventDefault();
    props.toggleListMenu();
  }

  const Icon = props.listDisplayStatus ? <IconX /> : <IconList />;
  const labelText = props.listDisplayStatus
    ? 'Close set list'
    : 'Open set list';

  return (
    <NavBar>
      <ListButton
        type="button"
        onClick={handleListButtonClick.bind(this)}
        aria-label={labelText}
        title={labelText}
      >
        {Icon}
      </ListButton>
    </NavBar>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggleListMenu: bindActionCreators(toggleListMenu, dispatch),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(React.memo(AppBar));

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
