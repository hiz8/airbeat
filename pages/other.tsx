import React from 'react';
import { bindActionCreators } from 'redux';
import { startClock, addCount, serverRenderClock } from '../actions';
import { connect } from 'react-redux';
import Page from '../components/Page';

interface IProps {
  startClock: Function;
}

class Counter extends React.Component<IProps> {
  private timer: number;

  public static getInitialProps({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer));
    store.dispatch(addCount());
    return { isServer };
  }

  public componentDidMount() {
    this.timer = this.props.startClock();
  }

  public componentWillUnmount() {
    clearInterval(this.timer);
  }

  public render() {
    return <Page title="Other Page" linkTo="/" />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Counter);
