import { styled } from "../../styles";

export const Container = styled("button", {
  width: "100%",
  height: "4.8rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  color: "$text",
  fontWeight: "$titleAndCardName",
  position: "absolute",
  bottom: 0,
  left: 0,
  borderRadius: "0 0 2.4rem 2.4rem",
  cursor: "pointer",
  transition: "filter 0.3s ease-in-out",
  "&:hover": {
    filter: "brightness(0.8)"
  },

  variants: {
    color: {
      Male: { background: "$backgroundCardMale" },
      Female: { background: "$backgroundCardFemale" },
      Genderless: { background: "$backgroundCardGenderless" },
      unknown: { background: "$backgroundCardUnknown" }
    }
  }
});
