import { styled } from "../../styles";

export const Container = styled("button", {
  width: "fit-content",
  padding: "4px 8px",
  borderRadius: 8,
  border: "none",
  color: "$text",
  cursor: "pointer",

  "@sm": {
    fontSize: "1.5rem"
  },

  variants: {
    color: {
      male: { background: "$backgroundCardMale" },
      female: { background: "$backgroundCardFemale" },
      genderless: { background: "$backgroundCardGenderless" },
      unknown: { background: "$backgroundCardUnknown" }
    },
    isActive: {
      true: {
        outline: "3px solid #ffffff50"
      },
      false: {}
    }
  }
});
