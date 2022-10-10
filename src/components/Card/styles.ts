import { styled } from "../../styles/";

export const Container = styled("div", {
  width: "fit-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",

  "@md": {
    width: "100%"
  }
});

export const ImageContainer = styled("div", {
  width: "22.9rem",
  height: "22.9rem",
  position: "absolute",
  borderRadius: "22.9rem",
  overflow: "hidden",
  top: -114,
  zIndex: 1,
  bordeRadius: "50%",

  variants: {
    color: {
      Male: { border: "5px solid $backgroundCardMale" },
      Female: { border: "5px solid $backgroundCardFemale" },
      Genderless: { border: "5px solid $backgroundCardGenderless" },
      unknown: { border: "5px solid $backgroundCardUnknown" }
    }
  }
});

export const CardContainer = styled("div", {
  width: "100%",
  maxWidth: "38.4rem",
  height: "42.2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  border: "1px solid #ffffff25",
  borderRadius: "2.4rem",
  overflow: "hidden"
});

export const Id = styled("span", {
  color: "$text",
  fontWeight: "$titleAndCardName",
  fontSize: "$cardId",
  marginTop: "14.5rem",
  zIndex: 1
});

export const Name = styled("div", {
  width: "34.6rem",
  color: "$text",
  fontWeight: "$titleAndCardName",
  fontSize: "$cardName",
  marginTop: "0.4rem",
  textAlign: "center",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  zIndex: 1
});

export const Details = styled("div", {
  display: "flex",
  textAlign: "center",
  flexDirection: "column",
  marginTop: "1rem",
  gap: 2,
  zIndex: 1,

  "> div": {
    display: "flex",
    flexDirection: "column",
    gap: 4
  }
});

export const EllipseBackground = styled("div", {
  position: "absolute",
  width: "20rem",
  height: "20rem",
  top: 0,
  filter: "blur(128px)",

  variants: {
    color: {
      Male: { background: "$backgroundCardMale" },
      Female: { background: "$backgroundCardFemale" },
      Genderless: { background: "$backgroundCardGenderless" },
      unknown: { background: "$backgroundCardUnknown" }
    }
  }
});
