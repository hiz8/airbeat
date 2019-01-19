/* eslint-disable */
import React, { Component } from 'react';
import styled from 'styled-components';

export default class DisplayTempo extends Component {
  constructor(props) {
    super(props);
  }

  public render() {
    return <ListWrapper>aaa</ListWrapper>;
  }
}

const ListWrapper = styled.ul`
  position: absolute;
  top: 44px;
  left: 0;
  width: 100%;
  background-color: #16364b;
  min-height: calc(100vh - 44px);
  margin: 0;
  padding: 45px 0 1em;
  list-style: none;
  box-sizing: border-box;
`;
