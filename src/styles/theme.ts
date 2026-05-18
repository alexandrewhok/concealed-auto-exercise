const theme = {
  colors: {
    primary: "#F2F6F8",
    secondary: "#2930C9",
    tertiary: "#9CA4AB",
    disabledBg: "#D1D5DB",
    disabledText: "#9CA3AF",
    base: "#080E1F",

    intents: {
      primary: {
        base: "#2930C9",
        hover: "#3540E0",
        pressed: "#1F27A8",
      },
      success: {
        base: "#2ECC71",
        hover: "#27AE60",
        pressed: "#1E8449",
      },
      danger: {
        base: "#E74C3C",
        hover: "#C0392B",
        pressed: "#922B21",
      },
    },
  },

  typography: {
    h1: "64px",
    h2: "48px",
    h3: "36px",
    h4: "30px",
    h5: "24px",
    h6: "20px",
    p: "16px",
  },
  fontFamily: "Inter, system-ui, sans-serif",
};

export type Theme = typeof theme;
export { theme };
