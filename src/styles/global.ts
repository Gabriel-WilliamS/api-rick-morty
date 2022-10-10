import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box"
  },

  ":root": {
    fontSize: "62.5%"
  },

  body: {
    color: "$text",
    "-webkit-font-smoothing": "antialiased",
    fontSize: "1.6rem",
    fontWeight: 400,
    backgroundColor: "$linearBackground"
  },

  "body, input, textarea, button": {
    fontFamily: "Montserrat",
    fontWeight: 400
  },

  "@media (max-width: 1200px)": {
    ":root": {
      fontSize: "56.25%"
    }
  },
  "@media (max-width: 1080px)": {
    ":root": {
      fontSize: "50%"
    }
  },
  "@media (max-width: 970px)": {
    ":root": {
      fontSize: "43.75%"
    }
  }
});
