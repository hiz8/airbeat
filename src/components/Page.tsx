import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Metronome from './Metronome/Metronome';
import TempoController from './Metronome/TempoController';
import BeatController from './Metronome/BeatController';
import DisplayTempo from './Metronome/DisplayTempo';
import List from './List/List';
import AppBar from './AppBar';
import { RootState } from '../store';

export default function Page() {
  const { tempo, beat, runStatus } = useSelector(
    (state: RootState) => state.metronome,
  );
  const { listDisplayStatus } = useSelector((state: RootState) => state.ui);

  return (
    <>
      <AppBar listDisplayStatus={listDisplayStatus} />
      <Wrapper>
        <DisplayTempo tempo={tempo} />
        <TempoController tempo={tempo} />
        <BeatController beat={beat} />
        <Metronome runStatus={runStatus} tempo={tempo} beat={beat} />
      </Wrapper>
      {listDisplayStatus ? <List /> : null}
    </>
  );
}

const Wrapper = styled.main`
  font-size: 2.4em;
  height: calc(100vh - 44px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
