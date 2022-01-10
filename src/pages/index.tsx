import { useContext } from 'react';
import Metronome from '../components/Metronome/Metronome';
import TempoController from '../components/Metronome/TempoController';
import BeatController from '../components/Metronome/BeatController';
import DisplayTempo from '../components/Metronome/DisplayTempo';
import List from '../components/List/List';
import AppBar from '../components/AppBar';
import * as styles from '../styles/pages/home.css';
import { MetoronomeProvider } from '../hooks/useMetoronome';
import { ListProvider, ListContext } from '../hooks/useList';

const Home = () => {
  return (
    <ListProvider>
      <MetoronomeProvider>
        <AppBar />
        <main className={styles.wrapper}>
          <DisplayTempo />
          <TempoController />
          <BeatController />
          <Metronome />
        </main>
        <ListWrapper />
      </MetoronomeProvider>
    </ListProvider>
  );
};

function ListWrapper() {
  const visible = useContext(ListContext);

  return visible ? <List /> : null;
}

export default Home;
