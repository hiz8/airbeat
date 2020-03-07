import { connect } from 'react-redux';
import styled from 'styled-components';
import Metronome from './Metronome';
import TempoController from './TempoController';
import BeatController from './BeatController';
import DisplayTempo from './DisplayTempo';
import List from './List';
import AppBar from './AppBar';

export default connect(state => state)(({ metronome, ui }: any) => {
  return (
    <>
      <AppBar listDisplayStatus={ui.listDisplayStatus} />
      <Wrapper>
        <DisplayTempo tempo={metronome.tempo} />
        <TempoController tempo={metronome.tempo} />
        <BeatController beat={metronome.beat} />
        <Metronome
          runStatus={metronome.runStatus}
          tempo={metronome.tempo}
          beat={metronome.beat}
        />
      </Wrapper>
      {ui.listDisplayStatus ? <List /> : null}
    </>
  );
});

const Wrapper = styled.main`
  font-size: 2.4em;
  height: calc(100vh - 44px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
