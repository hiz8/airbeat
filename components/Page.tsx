import Link from 'next/link';
import { connect } from 'react-redux';
import Metronome from './Metronome';

export default connect(state => state)(
  ({ title, linkTo, updatePlaying }: any) => {
    return (
      <>
        <h1>{title}</h1>
        <Metronome playing={updatePlaying.playing} />
        <nav>
          <Link href={linkTo}>
            <a>Navigate</a>
          </Link>
        </nav>
      </>
    );
  },
);
