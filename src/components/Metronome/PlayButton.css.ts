import { style, styleVariants } from '@vanilla-extract/css';
import color from '../../const/color';

const buttonBase = style({
  boxShadow: '2px 4px 5px #cdcfd4, -2px -2px 4px #fff',
  background: 'none',
  border: '2px solid #fff',
  borderRadius: '30px',
  textDecoration: 'none',
  width: '110px',
  height: '45px',
  textAlign: 'center',
  cursor: 'pointer',
  margin: '1.5em auto 1em',
  padding: ['0', '0'],
  display: 'block',
  color: color.FONT,
  fontFamily: 'inherit',
  fontSize: '1rem',
  outline: 'none',

  selectors: {
    "&[data-pressed='true']": {
      boxShadow: 'none',
      background: 'linear-gradient(145deg, #d9dce0, #ffffff)',
    },
    "&[data-focus-visible='true']": {
      boxShadow: '0 0 0 4px orange',
    },
  },
});

export const button = styleVariants({
  pause: [
    buttonBase,
    {
      backgroundColor: color.PRIMARY,
    },
  ],
  playing: [buttonBase],
});
