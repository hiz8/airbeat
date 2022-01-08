import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  fontSizes: {
    1: '12px',
    2: '14px',
    3: '16px',
    4: '18px',
    5: '21px',
  },
});