import { style, keyframes } from "@vanilla-extract/css";
import color from "../../const/color";

export const select = style({
  padding: "5px",
  border: "none",
  fontSize: "1rem",
  margin: "0 auto 0.5em",
  display: "block",
});

export const button = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#fff",
  border: "none",
  borderRadius: "30px",
  padding: "10px 10px 10px 15px",
  fontSize: "1rem",
  margin: "0 auto 0.5em",
  cursor: "pointer",
  color: color.FONT,
  fontFamily: "inherit",
  boxShadow: "1px 1px 2px #cdcfd4 inset, -1px -1px 2px #fff inset",
  width: "120px",
  textAlign: "left",
  outline: "none",

  selectors: {
    "&[data-focus-visible='true']": {
      outline: "solid orange",
    },
  },
});

export const listBox = style({
  boxShadow: "2px 4px 5px #cdcfd4, -2px -2px 4px #fff",
  border: "2px solid #fff",
  padding: "0",
  fontSize: "1rem",
  cursor: "pointer",
  backgroundColor: "#f1f4f9",
  color: color.FONT,
  width: "120px",
  boxSizing: "border-box",
  borderRadius: "10px",
});

export const listItem = style({
  padding: "10px 15px",
  outline: "none",

  selectors: {
    "&[data-hovered='true']": {
      backgroundColor: "#ffffff",
    },
    "&[data-focus-visible='true']": {
      outline: "solid orange",
    },
  },
});

export const popover = style({
  padding: "0",
  fontSize: "1rem",
  cursor: "pointer",
  backgroundColor: "#f1f4f9",
  color: color.FONT,
  width: "120px",
  boxSizing: "border-box",
  borderRadius: "10px",
});

const entering = keyframes({
  '0%': {
    opacity: 0,
    transform: "scale(0.9)",
  },
  '60%': {
    opacity: 1,
    transform: "scale(1.05)",
  },
  '100%': {
    opacity: 1,
    transform: "scale(1)",
  },
});

const exiting = keyframes({
  '0%': {
    opacity: 1,
    transform: "scale(1)",
  },
  '100%': {
    opacity: 0,
    transform: "scale(0.9)",
  },
});

export const popoverEntering = style({
  animationName: entering,
  animationDuration: "0.3s",
  animationTimingFunction: "ease-in-out",
});

export const popoverExiting = style({
  animationName: exiting,
  animationDuration: "0.15s",
});
