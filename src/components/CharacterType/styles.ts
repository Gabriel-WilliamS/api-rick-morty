import { styled } from "../../styles";

export const Container = styled("button", {
  width: "fit-content",
  padding: "4px 8px",
  borderRadius: 8,
  border: "none",
  color: "$text",
  marginTop: "1.2rem",
  zIndex: 1,

  variants: {
    color: {
      Male: { background: "$backgroundCardMale" },
      Female: { background: "$backgroundCardFemale" },
      Genderless: { background: "$backgroundCardGenderless" },
      unknown: { background: "$backgroundCardUnknown" }
    }
  }
});
