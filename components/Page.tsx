import { connect } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import Metronome from './Metronome';
import TempoController from './TempoController';
import BeatController from './BeatController';
import DisplayTempo from './DisplayTempo';
import AppBar from './AppBar';
import color from '../const/color';

export default connect(state => state)(
  ({ updateRunStatus, updateTempo, updateBeat }: any) => {
    return (
      <>
        <AppBar />
        <Wrapper>
          <GlobalStyle />
          <DisplayTempo tempo={updateTempo.tempo} />
          <TempoController tempo={updateTempo.tempo} />
          <BeatController beat={updateBeat.beat} />
          <Metronome
            runStatus={updateRunStatus.runStatus}
            tempo={updateTempo.tempo}
            beat={updateBeat.beat}
          />
        </Wrapper>
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
      url('/static/fonts/overpass-mono-v3-latin-regular.woff2') format('woff2'),
      url('/static/fonts/overpass-mono-v3-latin-regular.woff') format('woff'),
      url('/static/fonts/overpass-mono-v3-latin-regular.ttf') format('truetype');
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

const Wrapper = styled.div`
  font-size: 2.4em;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
