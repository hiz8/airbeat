import { connect } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import Metronome from './Metronome';
import TempoController from './TempoController';
import BeatController from './BeatController';
import DisplayTempo from './DisplayTempo';
import color from '../const/color';

export default connect(state => state)(
  ({ updateRunStatus, updateTempo, updateBeat }: any) => {
    return (
      <>
        <GlobalStyle />
        <DisplayTempo tempo={updateTempo.tempo} />
        <TempoController tempo={updateTempo.tempo} />
        <BeatController beat={updateBeat.beat} />
        <Metronome
          runStatus={updateRunStatus.runStatus}
          tempo={updateTempo.tempo}
          beat={updateBeat.beat}
        />
      </>
    );
  },
);

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Overpass Mono';
    font-style: normal;
    font-weight: 400;
    src: local('Overpass Mono Regular'), local('OverpassMono-Regular'),
      url('./fonts/overpass-mono-v3-latin-regular.woff2') format('woff2'),
      url('./fonts/overpass-mono-v3-latin-regular.woff') format('woff'),
      url('./fonts/overpass-mono-v3-latin-regular.ttf') format('truetype');
  }
  html, body {
    margin: 0;
    position: relative;
  }
  body {
    overflow: auto;
    font-size: 62.5%;
    background-color: ${color.BASE};
    color: #fff;
    font-family: 'Overpass Mono', monospace;
  }
`;
