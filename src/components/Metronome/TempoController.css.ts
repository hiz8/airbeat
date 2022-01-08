import { style } from '@vanilla-extract/css';

export const controller = style({
  display: "flex",
  justifyContent: "space-between",
  margin: "0.5em 0.5em 0"
});

export const button = style({
  backgroundColor: "#1baab1",
  boxShadow: "none",
  border: "2px solid #fff",
  borderRadius: "50%",
  height: "44px",
  width: "44px",
  cursor: "pointer",
  fontSize: "1.2rem",
  boxSizing: "border-box",
  color: "#fff",
  fontFamily: "inherit",
  transition: "box-shadow 0 linear",
  position: "relative",
  outline: "none",

  ':focus': {
    outline: "none"
  },
  ':active': {
    boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.4)",
    outline: "none"
  },
  '::before': {
    backgroundColor: "#fff",
    width: "22px",
    height: "2px",
    display: "inline-block",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: "-11px",
    marginTop: "-1px"
  },
  '::after': {
    backgroundColor: "#fff",
    width: "22px",
    height: "2px",
    display: "inline-block",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: "-11px",
    marginTop: "-1px"
  },
});

export const plusButton = style({
  backgroundColor: "#1baab1",
  boxShadow: "none",
  border: "2px solid #fff",
  borderRadius: "50%",
  height: "44px",
  width: "44px",
  cursor: "pointer",
  fontSize: "1.2rem",
  boxSizing: "border-box",
  color: "#fff",
  fontFamily: "inherit",
  transition: "box-shadow 0 linear",
  position: "relative",
  outline: "none",

  ':focus': {
    outline: "none"
  },
  ':active': {
    boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.4)",
    outline: "none"
  },
  '::before': {
    backgroundColor: "#fff",
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
  '::after': {
    backgroundColor: "#fff",
    width: "22px",
    height: "2px",
    display: "inline-block",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: "-11px",
    marginTop: "-1px",
    content: "",
    transform: "rotate(0.25turn)"
  },
});

export const minusButton = style({
  backgroundColor: "#1baab1",
  boxShadow: "none",
  border: "2px solid #fff",
  borderRadius: "50%",
  height: "44px",
  width: "44px",
  cursor: "pointer",
  fontSize: "1.2rem",
  boxSizing: "border-box",
  color: "#fff",
  fontFamily: "inherit",
  transition: "box-shadow 0 linear",
  position: "relative",
  outline: "none",

  ':focus': {
    outline: "none"
  },
  ':active': {
    boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.4)",
    outline: "none"
  },
  '::before': {
    backgroundColor: "#fff",
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
  '::after': {
    backgroundColor: "#fff",
    width: "22px",
    height: "2px",
    display: "inline-block",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: "-11px",
    marginTop: "-1px"
  },
});

export const slider = style({
  flex: 1,
  display: "flex",
  alignItems: "center",
  margin: "0 0.25em"
});

export const sliderInput = style({
  width: "100%",
  padding: "0",
  backgroundColor: "transparent",
  WebkitAppearance: "none",
  MozAppearance: "none",
  appearance: "none",

  ':focus': {
    outline: "0"
  },
  // @ts-ignore
  '::-moz-focus-outer': {
    border: "0"
  },
  // @ts-ignore
  '::-webkit-slider-thumb': {
    width: "16px",
    height: "16px",
    marginTop: "-0.4rem",
    backgroundColor: "#fff",
    border: "1px solid rgba(0, 0, 0, 0.7)",
    borderRadius: "1rem",
    transition:
      "background-color 0.15s ease-in-out,\n      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    WebkitAppearance: "none",
    appearance: "none",
    cursor: "pointer"
  },
  // @ts-ignore
  '::-moz-focus-outer': {
    border: "0"
  },
  // @ts-ignore
  '::-webkit-slider-thumb:active': {
    boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.6)"
  },
  // @ts-ignore
  '::-webkit-slider-runnable-track': {
    width: "100%",
    height: "0.2rem",
    color: "transparent",
    cursor: "pointer",
    backgroundColor: "#dee2e6",
    borderColor: "transparent",
    borderRadius: "1rem"
  },
  // @ts-ignore
  '::-webkit-slider-runnable-track': {
    width: "16px",
    height: "16px",
    backgroundColor: "#fff",
    border: "1px solid rgba(0, 0, 0, 0.7)",
    borderRadius: "1rem",
    transition:
      "background-color 0.15s ease-in-out,\n      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    MozAppearance: "none",
    appearance: "none",
    cursor: "pointer"
  },
  // @ts-ignore
  '::-moz-range-thumb:active': {
    boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.6)"
  },
  // @ts-ignore
  '::-moz-range-track': {
    width: "100%",
    height: "0.2rem",
    color: "transparent",
    cursor: "pointer",
    backgroundColor: "#dee2e6",
    borderColor: "transparent",
    borderRadius: "1rem"
  },
  // @ts-ignore
  '::-ms-thumb': {
    width: "16px",
    height: "16px",
    marginTop: "0",
    marginRight: "0.2rem",
    marginLeft: "0.2rem",
    backgroundColor: "#fff",
    border: "1px solid rgba(0, 0, 0, 0.7)",
    borderRadius: "1rem",
    transition:
      "background-color 0.15s ease-in-out,\n      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    appearance: "none",
    cursor: "pointer"
  },
  // @ts-ignore
  '::-ms-thumb:active': {
    boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.6)"
  },
  // @ts-ignore
  '::-ms-track': {
    width: "100%",
    height: "0.2rem",
    color: "transparent",
    cursor: "pointer",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  // @ts-ignore
  '::-ms-fill-lower': {
    backgroundColor: "#dee2e6",
    borderRadius: "1rem"
  },
  // @ts-ignore
  '::-ms-fill-upper': {
    marginRight: "15px",
    backgroundColor: "#dee2e6",
    borderRadius: "1rem"
  },
  
});
