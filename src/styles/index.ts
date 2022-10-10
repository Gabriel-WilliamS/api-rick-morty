import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme
} = createStitches({
  theme: {
    colors: {
      linearBackground: "linear-gradient(180deg, #1F285B 0%, #060B28 100%);",
      background: "#108839",
      backgroundCardMale: "#0076FF",
      backgroundCardMaleCircle: "#0076FF",
      backgroundCardFemale: "#BD00FF",
      backgroundCardGenderless: "#ff7A00",
      backgroundCardUnknown: "#5A566A",
      backgroundGreen: "#1CD80E",

      text: "#fff"
    },
    fontSizes: {
      title: "5.6rem",
      text: "1.6rem",
      cardName: "3.2rem",
      cardId: "2rem"
    },
    fontWeights: {
      titleAndCardName: 700
    }
  },
  media: {
    sm: "(max-width: 570px)",
    md: "(max-width: 840px)",
    lg: "(max-width: 1024px)"
  }
});
