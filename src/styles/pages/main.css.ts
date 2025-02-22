import { style } from "@vanilla-extract/css";
import { responsiveStyle, breakpoints } from "../../styles/theme.css";

const tabletSize = `${breakpoints.md}px`;

export const wrapper = style([
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  responsiveStyle({
    md: {
      boxSizing: "border-box",
    },
  }),
]);

export const inner = style([
  {
    width: "100%",
    maxWidth: tabletSize,
    boxSizing: "border-box",
  },
  responsiveStyle({
    sm: {
      padding: "2em",
    },
    md: {
      borderRight: "2px solid #fff",
      borderLeft: "2px solid #fff",
      boxShadow: "0 0 1px #cdcfd4 inset",
    },
  }),
]);
