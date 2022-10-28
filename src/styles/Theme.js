const size = {
  tablet: "768px",
  desktop: "1024px",
};

const colors = {
  primary: "#2bed96",
  lightBlack: "#212529",
  darkGray: "#333333",
  gray: "#888888",
  lightGray: "#dddddd",
  lighterGray: "#f0f0f3",
  red: "#ff4646",
  white: "#ffffff",
};

const fontSizes = {
  xs: "12px",
  sm: "14px",
  base: "16px",
  lg: "18px",
  xl: "20px",
  title: "22px",
  icon: "50px",
};

const fontWeights = {
  xs: "400",
  sm: "500",
  base: "600",
  lg: "700",
  title: "800",
};

export const theme = {
  colors,
  fontSizes,
  fontWeights,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};
