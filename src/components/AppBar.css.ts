import { style } from "@vanilla-extract/css";

export const navBar = style({
  display: "flex",
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

export const infoButton = style({
  width: "44px",
  height: "44px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",

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
