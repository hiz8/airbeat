import { style } from "@vanilla-extract/css";
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
  boxShadow: "2px 2px 3px #cdcfd4 inset, -2px -2px 3px #fff inset",
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
