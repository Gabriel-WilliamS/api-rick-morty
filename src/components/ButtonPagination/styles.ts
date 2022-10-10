import { styled } from "../../styles";

export const Container = styled("button", {
  width: "4rem",
  height: "4rem",
  borderRadius: 8,
  border: "2px solid #fff",
  color: "$text",
  fontWeight: "$titleAndCardName",
  cursor: "pointer",

  variants: {
    isActive: {
      true: { backgroundColor: "$backgroundCardMale" },
      false: { backgroundColor: "transparent" }
    }
  }
});
