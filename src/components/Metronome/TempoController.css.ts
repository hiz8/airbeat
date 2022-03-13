import { style, styleVariants } from '@vanilla-extract/css';

export const controller = style({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0.5em 0.5em 0',
});

const buttonBase = style({
  backgroundColor: '#1baab1',
  boxShadow: 'none',
  border: '2px solid #fff',
  borderRadius: '50%',
  height: '44px',
  width: '44px',
  cursor: 'pointer',
  fontSize: '0',
  boxSizing: 'border-box',
  color: '#fff',
  fontFamily: 'inherit',
  transition: 'box-shadow 0 linear',
  position: 'relative',

  ':focus': {
    boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.4)',
  },
});

const plusButtonBase = style([
  buttonBase,
  {
    '::before': {
      backgroundColor: '#fff',
      width: '22px',
      height: '2px',
      display: 'inline-block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginLeft: '-11px',
      marginTop: '-1px',
      content: '',
    },
    '::after': {
      backgroundColor: '#fff',
      width: '22px',
      height: '2px',
      display: 'inline-block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginLeft: '-11px',
      marginTop: '-1px',
      content: '',
      transform: 'rotate(0.25turn)',
    },
  },
]);

export const plusButton = styleVariants({
  normal: [plusButtonBase, {}],
  focus: [
    plusButtonBase,
    {
      ':focus': {
        boxShadow: '0 0 0 4px orange',
      },
    },
  ],
});

export const minusButtonBase = style([
  buttonBase,
  {
    '::before': {
      backgroundColor: '#fff',
      width: '22px',
      height: '2px',
      display: 'inline-block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginLeft: '-11px',
      marginTop: '-1px',
      content: '',
    },
    '::after': {
      backgroundColor: '#fff',
      width: '22px',
      height: '2px',
      display: 'inline-block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginLeft: '-11px',
      marginTop: '-1px',
    },
  },
]);

export const minusButton = styleVariants({
  normal: [minusButtonBase, {}],
  focus: [
    minusButtonBase,
    {
      ':focus': {
        boxShadow: '0 0 0 4px orange',
      },
    },
  ],
});
