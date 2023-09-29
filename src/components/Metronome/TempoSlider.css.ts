import { style } from '@vanilla-extract/css';
import color from '../../const/color';

export const group = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'calc(100% - 130px)',
  touchAction: 'none',
});

export const track = style({
  display: 'flex',
  alignItems: 'center',
  height: 30,
  width: '100%',
});

export const trackBar = style({
  backgroundColor: '#fff',
  height: 5,
  top: 13,
  width: '100%',
  boxShadow: '-1px 1px 1px #cdcfd4 inset',
  borderRadius: 5,
});

export const slider = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  margin: '0 0.25em',
});

export const thumbWrapper = style({
  top: 3,
});

export const thumb = style({
  width: 22,
  height: 22,
  borderRadius: '50%',
  border: '2px solid #fff',
  boxShadow: '2px 4px 5px #cdcfd4, -2px -2px 4px #fff',
  boxSizing: 'border-box',
  cursor: 'grab',
  backgroundColor: color.ACCENT,
  marginTop: 2,

  selectors: {
    "&[data-dragging='true']": {
      background: 'linear-gradient(145deg, #8cb8e6, #a6daff)',
      boxShadow: 'none',
      cursor: 'grabbing',
    },
    "&[data-focus-visible='true']": {
      backgroundColor: 'orange',
    },
  },
});
