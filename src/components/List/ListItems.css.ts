import { style } from '@vanilla-extract/css';

export const itemWrapper = style({
  color: '#fff',
  fontSize: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
});

export const listItemInfo = style({
  display: 'flex',
  flexWrap: 'wrap',
  cursor: 'pointer',
  padding: '0.25em 0.5em',
  boxSizing: 'border-box',
  flex: 1,

  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
});

export const listItemInfoName = style({
  width: '100%',
  marginBottom: '0.1em',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

export const listItemInfoTempo = style({
  fontSize: '0.8rem',
  width: '75px',
});

export const listItemInfoBeat = style({
  fontSize: '0.8rem',
});

export const listItemControlle = style({
  display: 'flex',
  alignItems: 'center',
});

export const listItemControlleDelete = style({
  background: 'none',
  border: 'none',
  color: '#fff',
  padding: '0',
  width: '44px',
  height: '44px',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
});

export const listItemControlleDeleteInnerSvg = style({
  selectors: {
    [`${listItemControlleDelete} &`]: {
      pointerEvents: 'none',
    },
  },
});
