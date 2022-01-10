import { style } from '@vanilla-extract/css';

export const navBar = style({
  display: 'flex',
});

export const listButton = style({
  background: 'none',
  border: 'none',
  marginLeft: 'auto',
  width: '44px',
  height: '44px',
  lineHeight: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  color: '#fff',

  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  ':focus': {
    outline: 'none',
  },
  ':active': {
    outline: 'none',
  },
});

export const infoButton = style({
  width: '44px',
  height: '44px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
});
