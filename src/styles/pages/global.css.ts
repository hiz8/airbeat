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
  // "2020年に最適なfont-familyの書き方 - ICS MEDIA" を参考に設定。
  // https://ics.media/entry/200317/
  fontFamily: `"Helvetica Neue", "Helvetica", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "Hiragino Sans", "Arial", "BIZ UDPGothic", "Meiryo", sans-serif`,
});

globalStyle('body', {
  overflow: 'auto',
  fontSize: '62.5%',
  backgroundColor: color.BASE,
  color: '#fff',
  fontFamily: "'Overpass Mono', monospace",
});

globalStyle('a:hover', {
  textDecoration: 'underline',
});
