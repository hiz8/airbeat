/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCount } from '../actions';
import styled from 'styled-components';

interface IProps {
  addCount: () => void;
  count: number;
}

class AddCount extends Component<IProps> {
  private add = () => {
    this.props.addCount();
  };

  public render() {
    const { count } = this.props;
    return (
      <Wrapper>
        <h1>
          AddCount: <span>{count}</span>
        </h1>
        <button onClick={this.add}>Add To Count</button>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(AddCount);

const Wrapper = styled.div`
  padding: 0 0 20px 0;
`;
