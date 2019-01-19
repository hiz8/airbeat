/* eslint-disable */
import React, { Component } from 'react';
import styled from 'styled-components';
import IconList from 'react-feather/dist/icons/list';

export default class AppBar extends Component {
  constructor(props) {
    super(props);
  }

  private _handleListButtonClick() {
    console.log('button click');
  }

  public render() {
    return (
      <NavBar>
        <ListButton href="#" onClick={this._handleListButtonClick}>
          <IconList />
        </ListButton>
      </NavBar>
    );
  }
}

const NavBar = styled.nav`
  display: flex;
`;
const ListButton = styled.a`
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
