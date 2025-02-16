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
  },
  responsiveStyle({
    md: {
      border: "1px solid #fff",
    },
  }),
]);
