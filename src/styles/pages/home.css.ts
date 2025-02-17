import { style } from "@vanilla-extract/css";
import { responsiveStyle } from "../../styles/theme.css";

export const wrapper = style([
  {
    height: "calc(100vh - 44px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  responsiveStyle({
    sm: {
      height: "calc(100vh - 44px - 4em)",
    },
  }),
]);
