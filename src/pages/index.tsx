import { useSelector } from 'react-redux';
import Metronome from '../components/Metronome/Metronome';
import TempoController from '../components/Metronome/TempoController';
import BeatController from '../components/Metronome/BeatController';
import DisplayTempo from '../components/Metronome/DisplayTempo';
import List from '../components/List/List';
import AppBar from '../components/AppBar';
import { RootState } from '../store';
import * as styles from "../styles/pages/home.css";

const Home = () => {
  const { tempo, beat, runStatus } = useSelector(
    (state: RootState) => state.metronome,
  );
  const { listDisplayStatus } = useSelector((state: RootState) => state.ui);

  return (
    <>
      <AppBar listDisplayStatus={listDisplayStatus} />
      <main className={styles.wrapper}>
        <DisplayTempo tempo={tempo} />
        <TempoController tempo={tempo} />
        <BeatController beat={beat} />
        <Metronome runStatus={runStatus} tempo={tempo} beat={beat} />
      </main>
      {listDisplayStatus ? <List /> : null}
    </>
  );
};

export default Home;
