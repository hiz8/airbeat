import { style } from '@vanilla-extract/css';
import color from '../../const/color';

export const select = style({
  padding: '5px',
  border: 'none',
  fontSize: '1rem',
  margin: '0 auto 0.5em',
  display: 'block',
  textAlign: 'center',
  appearance: 'none',
  cursor: 'pointer',
  background: 'none',
  color: color.FONT,
  fontFamily: 'inherit',
});
