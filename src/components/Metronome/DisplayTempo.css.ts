import { style } from "@vanilla-extract/css";

export const outputTempo = style({
  display: "flex",
  justifyContent: "center",
  fontSize: "2rem",
  position: "relative",
  textAlign: "right",
  lineHeight: 1,
  marginTop: "-40px",
});

export const outputTempoValue = style({
  width: "60px",

  "::after": {
    content: "BPM",
    fontSize: "0.9rem",
    position: "absolute",
    left: "50%",
    marginLeft: "35px",
    bottom: "3px",
  },
});
