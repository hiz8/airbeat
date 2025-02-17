import { style } from "@vanilla-extract/css";
import { breakpoints } from "../../styles/theme.css";
import color from "../../const/color";

export const modalOverray = style({
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 100,

  selectors: {
    "&[data-entering]": {
      animation: "modal-fade 200ms",
    },
    "&[data-exiting]": {
      animation: "modal-fade 150ms reverse ease-in",
    },
  },
});

export const modal = style({
  background: color.BG,
  borderLeft: `1px solid #fff`,
  borderRight: `1px solid #fff`,
  color: color.FONT,
  maxWidth: `${breakpoints.md}px`,
  width: "100%",

  selectors: {
    "&[data-entering]": {
      animation: "modal-zoom 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    },
  },
});

export const listWrapper = style({
  width: "100%",
  backgroundColor: color.BG,
  minHeight: "calc(100vh - 44px)",
  margin: "0",
  padding: "0 0 1em",
  listStyle: "none",
  boxSizing: "border-box",
});

export const listItem = style({
  color: color.FONT,
  fontSize: "1rem",
  display: "flex",
  justifyContent: "space-between",
});

export const listItemInfo = style({
  display: "flex",
  flexWrap: "wrap",
  padding: "0 0 0.25em",
  boxSizing: "border-box",
  flex: 1,
});

export const listItemInfoNameInputWrapper = style({
  width: "100%",
  marginBottom: "0.1em",
});

export const listItemInfoNameInput = style({
  backgroundColor: "inherit",
  fontFamily: "inherit",
  fontSize: "1rem",
  color: "inherit",
  border: "none",
  padding: "0.5em 0.5em 0.25em",
  width: "100%",
  boxSizing: "border-box",

  selectors: {
    "&[data-focused='true']": {
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      outline: "none",
    },
    "&[data-focus-visible='true']": {
      outline: "solid orange",
    },
  },
});

export const listItemInfoTempo = style({
  fontSize: "0.8rem",
  width: "75px",
  marginLeft: "0.5rem",
});

export const listItemInfoBeat = style({
  fontSize: "0.8rem",
});

export const listItemControlle = style({
  display: "flex",
  alignItems: "center",
});

export const listItemControlleSave = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "none",
  border: "none",
  color: color.FONT,
  padding: "0",
  width: "44px",
  height: "44px",
  cursor: "pointer",

  // @ts-ignore
  ":not(:disabled):hover": {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },

  selectors: {
    "&[data-disabled='true']": {
      opacity: 0.5,
      pointerEvents: "none",
    },
    "&[data-focused='true']": {
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      outline: "none",
    },
    "&[data-focus-visible='true']": {
      outline: "solid orange",
    },
  },
});

export const listButton = style({
  background: "none",
  border: "none",
  marginLeft: "auto",
  width: "44px",
  height: "44px",
  lineHeight: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  color: "#fff",

  selectors: {
    "&[data-hovered='true']": {
      backgroundColor: "rgba(255, 255, 255, 0.25)",
    },
    "&[data-focused='true']": {
      outline: "none",
    },
    "&[data-focus-visible='true']": {
      outline: "solid orange",
    },
  },
});
