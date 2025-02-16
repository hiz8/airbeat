import { PlayButton } from "../components/Metronome/PlayButton";
import { TempoController } from "../components/Metronome/TempoController";
import { BeatController } from "../components/Metronome/BeatController";
import { DisplayTempo } from "../components/Metronome/DisplayTempo";
import { AppBar } from "../components/AppBar";
import * as styles from "../styles/pages/home.css";
import { MetoronomeProvider } from "../hooks/useMetoronome";
import { ListProvider } from "../hooks/useList";

const title = "airbeat";

const Home = () => {
  return (
    <ListProvider>
      <title>{title}</title>
      <MetoronomeProvider>
        <AppBar />
        <main className={styles.wrapper}>
          <DisplayTempo />
          <TempoController />
          <BeatController />
          <PlayButton />
        </main>
      </MetoronomeProvider>
    </ListProvider>
  );
};

export default Home;
