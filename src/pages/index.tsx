import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Metronome from '../components/Metronome/Metronome';
import TempoController from '../components/Metronome/TempoController';
import BeatController from '../components/Metronome/BeatController';
import DisplayTempo from '../components/Metronome/DisplayTempo';
import List from '../components/List/List';
import AppBar from '../components/AppBar';
import { RootState } from '../store';

const Home = () => {
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
};

export default Home;

const Wrapper = styled.main`
  font-size: 2.4em;
  height: calc(100vh - 44px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
