import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import color from '../../const/color';

globalFontFace('Overpass Mono', {
  fontStyle: 'normal',
  fontWeight: 400,
  src: "local('Overpass Mono Regular'), local('OverpassMono-Regular'), url('/static/fonts/overpass-mono-v3-latin-regular.woff2') format('woff2'), url('/static/fonts/overpass-mono-v3-latin-regular.woff') format('woff'), url('/static/fonts/overpass-mono-v3-latin-regular.ttf') format('truetype')",
});

globalStyle('html, body', {
  margin: '0',
  position: 'relative',
  fontFamily: `Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;`,
});

globalStyle('body', {
  overflow: 'auto',
  fontSize: '62.5%',
  backgroundColor: color.BG,
  color: color.FONT,
  fontFamily: "'Overpass Mono', monospace",
});

globalStyle('a:hover', {
  textDecoration: 'underline',
});
