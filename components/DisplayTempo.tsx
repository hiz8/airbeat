/* eslint-disable */
import React, { Component } from 'react';
import styled from 'styled-components';

interface IProps {
  tempo: number;
}

export default class DisplayTempo extends Component<IProps> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { tempo } = this.props;

    return (
      <OutputTempo>
        <OutputTempoValue>{tempo}</OutputTempoValue>
      </OutputTempo>
    );
  }
}

const OutputTempo = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  position: relative;
  text-align: right;
  line-height: 1;
`;

const OutputTempoValue = styled.output`
  width: 60px;

  &::after {
    content: 'BPM';
    font-size: 0.9rem;
    position: absolute;
    left: 50%;
    margin-left: 35px;
    bottom: 3px;
  }
`;
