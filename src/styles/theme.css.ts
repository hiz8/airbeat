import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  fontSizes: {
    1: "12px",
    2: "14px",
    3: "16px",
    4: "18px",
    5: "21px",
  },
});

export const breakpointNames = ["sm", "md", "lg", "xl"] as const;

export const breakpoints = {
  sm: 600,
  md: 840,
  lg: 1280,
  xl: 1920,
} as const;

type ResponsiveStyle = {
  sm?: any;
  md?: any;
  lg?: any;
  xl?: any;
};

export const responsiveStyle = ({ sm, md, lg, xl }: ResponsiveStyle) => ({
  "@media": {
    [`screen and (min-width: ${breakpoints.sm}px)`]: sm ?? {}, // Hnadset
    [`screen and (min-width: ${breakpoints.md}px)`]: md ?? {}, // Small tablet
    [`screen and (min-width: ${breakpoints.lg}px)`]: lg ?? {}, // Large tablet
    [`screen and (min-width: ${breakpoints.xl}px)`]: xl ?? {},
  },
});
