import { style } from "@vanilla-extract/css";
import { responsiveStyle } from "../../styles/theme.css";
import color from "../../const/color";

export const infoWrapper = style({
  margin: "0",
  listStyle: "none",
  boxSizing: "border-box",
});

export const main = style([
  {
    height: "calc(100vh - 44px - 30px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  responsiveStyle({
    sm: {
      height: "calc(100vh - 44px - 30px - 4em)",
    },
  }),
]);

export const logo = style({
  width: "80px",
  height: "80px",
  margin: "-80px auto 0",
});

export const title = style({
  color: color.FONT,
  textAlign: "center",
  fontSize: "1.7rem",
  margin: "0",
  fontWeight: 400,
});

export const description = style({
  color: color.FONT,
  textAlign: "center",
  fontSize: "0.9rem",
  margin: "0",
  fontWeight: 400,
});

export const copyright = style({
  color: color.FONT,
  fontSize: "0.8rem",
  textAlign: "center",
});

export const infoButton = style({
  width: "44px",
  height: "44px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  color: "#333",
});
