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
  ':focus': {
    outline: 'none',
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
