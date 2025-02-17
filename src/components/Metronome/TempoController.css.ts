import { style } from "@vanilla-extract/css";
import color from "../../const/color";

export const controller = style({
  display: "flex",
  justifyContent: "space-between",
  margin: "0.5em 2em 0",
});

const buttonBase = style({
  backgroundColor: color.PRIMARY,
  boxShadow: "2px 4px 5px #cdcfd4, -2px -2px 4px #fff",
  border: "2px solid #fff",
  borderRadius: "50%",
  height: "44px",
  width: "44px",
  cursor: "pointer",
  fontSize: "0",
  boxSizing: "border-box",
  color: "#fff",
  fontFamily: "inherit",
  transition: "box-shadow 0 linear",
  position: "relative",
  outline: "none",

  selectors: {
    "&[data-pressed='true']": {
      boxShadow: "1px 1px 2px #cdcfd4 inset, -1px -1px 2px #fff inset",
    },
    "&[data-focus-visible='true']": {
      boxShadow: "0 0 0 4px orange",
    },
  },
});

export const plusButton = style([
  buttonBase,
  {
    "::before": {
      backgroundColor: color.FONT,
      width: "22px",
      height: "2px",
      display: "inline-block",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginLeft: "-11px",
      marginTop: "-1px",
      content: "",
    },
    "::after": {
      backgroundColor: color.FONT,
      width: "22px",
      height: "2px",
      display: "inline-block",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginLeft: "-11px",
      marginTop: "-1px",
      content: "",
      transform: "rotate(0.25turn)",
    },
  },
]);

export const minusButton = style([
  buttonBase,
  {
    "::before": {
      backgroundColor: color.FONT,
      width: "22px",
      height: "2px",
      display: "inline-block",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginLeft: "-11px",
      marginTop: "-1px",
      content: "",
    },
    "::after": {
      backgroundColor: color.FONT,
      width: "22px",
      height: "2px",
      display: "inline-block",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginLeft: "-11px",
      marginTop: "-1px",
    },
  },
]);
