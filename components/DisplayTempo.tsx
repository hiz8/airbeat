/* eslint-disable */
import React, { Component } from 'react';

interface IProps {
  tempo: number;
}

class DisplayTempo extends Component<IProps> {
  constructor(props) {
    super(props);
  }

  public render() {
    return <output>{this.props.tempo}</output>;
  }
}

export default DisplayTempo;
