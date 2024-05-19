import { style } from "@vanilla-extract/css";
import color from "../../const/color";

export const listWrapper = style({
  position: "absolute",
  top: "44px",
  left: "0",
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
