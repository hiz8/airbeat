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
  position: 'relative',
  height: 30,
  width: ' 100%',
});

export const trackBar = style({
  position: 'absolute',
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
  position: 'absolute',
  top: 3,
  transform: 'translateX(-50%)',
});

const thumbBase = style({
  width: 20,
  height: 20,
  borderRadius: '50%',
  border: '1px solid rgba(0, 0, 0, 0.7)',
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
