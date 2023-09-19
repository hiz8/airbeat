import { style, styleVariants } from '@vanilla-extract/css';

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
  backgroundColor: '#dee2e6',
  height: 3,
  top: 13,
  width: '100%',
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

const thumbBase = style({
  width: 20,
  height: 20,
  borderRadius: '50%',
  boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.6)',
});

export const thumb = styleVariants({
  normal: [thumbBase, { backgroundColor: '#fff' }],
  focus: [thumbBase, { backgroundColor: 'orange' }],
  dragging: [
    thumbBase,
    {
      backgroundColor: '#e3e3e3',
      boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.6)',
    },
  ],
});
