import { useEffect, useContext } from 'react';
import { PlayButton } from '../components/Metronome/PlayButton';
import { TempoController } from '../components/Metronome/TempoController';
import { BeatController } from '../components/Metronome/BeatController';
import { DisplayTempo } from '../components/Metronome/DisplayTempo';
import { List } from '../components/List/List';
import { AppBar } from '../components/AppBar';
import * as styles from '../styles/pages/home.css';
import { MetoronomeProvider } from '../hooks/useMetoronome';
import { ListProvider, ListContext } from '../hooks/useList';

const Home = () => {
  useEffect(() => {
    document.title = 'airbeat';
  }, []);

  return (
    <ListProvider>
      <MetoronomeProvider>
        <AppBar />
        <main className={styles.wrapper}>
          <DisplayTempo />
          <TempoController />
          <BeatController />
          <PlayButton />
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
