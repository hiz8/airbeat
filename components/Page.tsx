import { connect } from 'react-redux';
import styled from 'styled-components';
import Metronome from './Metronome';
import TempoController from './TempoController';
import BeatController from './BeatController';
import DisplayTempo from './DisplayTempo';
import List from './List';
import AppBar from './AppBar';

export default connect(state => state)(
  ({ updateRunStatus, updateTempo, updateBeat, toggleListMenu }: any) => {
    return (
      <>
        <AppBar listDisplayStatus={toggleListMenu.listDisplayStatus} />
        <Wrapper>
          <DisplayTempo tempo={updateTempo.tempo} />
          <TempoController tempo={updateTempo.tempo} />
          <BeatController beat={updateBeat.beat} />
          <Metronome
            runStatus={updateRunStatus.runStatus}
            tempo={updateTempo.tempo}
            beat={updateBeat.beat}
          />
        </Wrapper>
        {toggleListMenu.listDisplayStatus ? <List /> : null}
      </>
    );
  },
);

const Wrapper = styled.div`
  font-size: 2.4em;
  height: calc(100vh - 44px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
