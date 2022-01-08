import { style, styleVariants } from '@vanilla-extract/css';
import color from "../../const/color";

const buttonBase = style({
  boxShadow: "none",
  background: "none",
  border: "2px solid #fff",
  borderRadius: "30px",
  textDecoration: "none",
  width: "110px",
  height: "45px",
  textAlign: "center",
  cursor: "pointer",
  margin: "1.5em auto 1em",
  padding: ["0", "0"],
  display: "block",
  color: "#fff",
  fontFamily: "inherit",
  fontSize: "1rem",
  ':focus': {
    outline: "none"
  },
});

export const button = styleVariants({
  active: [buttonBase, {
    backgroundColor: color.PRIMARY,
    boxShadow: '0 0 0 4px rgba(255, 255, 255, .4)'
  }],
  passive: [buttonBase, {
    backgroundColor: color.BASE,
    boxShadow: "none"
  }],
});
