import { connect } from 'react-redux';
import Metronome from './Metronome';

export default connect(state => state)(
  ({ title, updateRunStatus, updateTempo, updateBeat }: any) => {
    return (
      <>
        <h1>{title}</h1>
        <Metronome
          runStatus={updateRunStatus.runStatus}
          tempo={updateTempo.tempo}
          beat={updateBeat.beat}
        />
      </>
    );
  },
);
