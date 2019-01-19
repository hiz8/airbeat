/* eslint-disable */
import React, { Component } from 'react';
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

class AppBar extends Component<IProps> {
  constructor(props) {
    super(props);
  }

  private _handleListButtonClick() {
    this.props.toggleListMenu();
  }

  public render() {
    const Icon = this.props.listDisplayStatus ? <IconX /> : <IconList />;
    return (
      <NavBar>
        <ListButton href="#" onClick={this._handleListButtonClick.bind(this)}>
          {Icon}
        </ListButton>
      </NavBar>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleListMenu: bindActionCreators(toggleListMenu, dispatch),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(AppBar);

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
