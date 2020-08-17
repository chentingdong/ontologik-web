// tailwind.config.js

module.exports = {
  important: true,
  theme: {
    // overrite default tailwind variables
    colors: {
      black: "#212121",
      white: "#FFFFFF",
      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        500: "#a0aec0",
        800: "#404040",
      },
      red: {
        300: "#fc8181",
        500: "#AE3A34",
        800: "#AE3A34",
      },
      blue: {
        100: "#ebf8ff",
        300: "#90cdf4",
        500: "#4299e1",
        700: "#2b6cb0",
        900: "#2a4365",
      },
      green: {
        100: "#f0fff4",
        200: "#c6f6d5",
        300: "#9ae6b4",
        400: "#68d391",
        500: "#2F6C30",
        700: "#197441",
        800: "#2F6C30",
      },
      orange: {
        500: "#F29441",
        800: "#F29441",
      },
      yellow: {
        500: "#F2C85B",
        800: "#F2C85B",
      },
      purple: {
        300: "#A13670",
        500: "#3A0751",
        800: "#3A0751",
      },
    },
    fontFamily: {
      sans: ["Avenir", "Varela", "Arial", "sans"],
      serif: ["kepler-std", "Varela", "serif"],
      mono: ["Menlo", "Liberation Mono", "Courier New", "monospace"],
      display: ["kepler-std", "Varela", "serif"],
      body: ["Avenir", "Varela", "Arial", "sans"],
    },
    fontSize: {
      xs: "0.64rem",
      sm: "0.8rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "3.815rem",
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "1": "1px",
      "2": "2px",
      "3": "3px",
      "4": "4px",
    },
    borderRadius: {
      none: "0",
      sm: "0.5rem",
      default: "1rem",
      md: "1.5rem",
      lg: "3rem",
      full: "9999px",
    },
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
    },
    // extend variables
    extend: {
      margin: {
        "96": "24rem",
        "128": "32rem",
      },
      screens: {
        "2xl": "1920px",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      fontSize: {
        "2xs": "0.5rem",
        "3xs": "0.3rem",
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover"],
    backgroundColor: ["responsive", "hover", "focus", "active"],
    fontFamily: ["responsive", "hover", "focus"],
    fontSize: ["responsive"],
    transitionDuration: ["responsive"],
  },
}
