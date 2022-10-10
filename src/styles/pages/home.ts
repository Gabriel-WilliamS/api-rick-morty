import { styled } from "..";

export const Header = styled("header", {
  width: "100%",
  background: "$linearBackground",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
});

export const SocialMedia = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 8
});

export const HeaderContent = styled("div", {
  maxWidth: 1180,

  display: "grid",
  gridTemplateColumns: "1fr 4rem 1fr",
  gridTemplateRows: "52.8rem",

  padding: "0 3rem",
  margin: "0 auto",

  "@md": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 0
  },

  "@sm": {
    padding: "0 2rem"
  }
});

export const Text = styled("div", {
  maxWidth: "52.3rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  h1: {
    fontWeight: "$titleAndCardName",
    fontSize: "$title",
    marginBottom: ".8rem"
  },

  p: {
    lineHeight: "150%"
  }
});

export const PortalDivider = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 20,

  "@md": {
    display: "none"
  }
});

export const Main = styled("main", {
  width: "100%",
  background: "$background",
  padding: "0 3rem"
});

export const SearchBar = styled("div", {
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  marginTop: "7.2rem"
});

export const SearchBarContent = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "end",
  justifyContent: "space-between",

  "@md": {
    flexDirection: "column",
    alignItems: "center",
    gap: 16
  }
});

export const SearchTypesContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 16,

  "@md": {
    width: "100%"
  },

  "> button": {
    width: "11rem",
    color: "$text",
    fontWeight: "$titleAndCardName",
    borderRadius: 8,
    border: "none",
    padding: "1.2rem 1.6rem",
    background: "$linearBackground",
    cursor: "pointer"
  },

  div: {
    display: "flex",
    gap: 8
  }
});

export const SearchInput = styled("form", {
  width: "48.8rem",
  height: "5.6rem",

  display: "flex",
  overflow: "hidden",
  borderRadius: 8,

  "@md": {
    width: "100%"
  },

  input: {
    width: "100%",
    borderRadius: "8px 0 0 8px",
    padding: "0 1.6rem",
    border: "none"
  },

  "> button": {
    width: "5.6rem",
    background: "$backgroundCardMale",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0 8px 8px 0",
    border: "none",
    cursor: "pointer"
  }
});

export const CharactersContainer = styled("div", {
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  marginTop: "20.4rem",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  rowGap: 150,
  columnGap: 20,

  "@md": {
    gridTemplateColumns: "1fr 1fr",

    alignItems: "center"
  },

  "@sm": {
    gridTemplateColumns: "1fr"
  }
});

export const Pagination = styled("div", {
  width: "fit-content",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  margin: "0 auto",
  marginTop: "4rem",
  marginBottom: "5rem",
  gap: 15,

  img: {
    cursor: "pointer"
  },

  span: {
    fontSize: "2rem",
    fontWeight: "$titleAndCardName"
  },

  "button:last-child,button:first-child": {
    background: "none",
    border: "none"
  }
});

export const PaginationContainer = styled("div", {
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "4rem",
  marginBottom: "5rem",

  "button, div": {
    fontSize: "clamp(2rem, 2rem + 1vw, 1.6rem)",
    color: "white"
  },
  button: {
    color: "white",
    fontFamily: "sans-serif",
    border: "1px solid #ffffff50"
  },

  "button.Mui-selected": {
    backgroundColor: "#0076ff",
    color: "white",
    fontFamily: "sans-serif"
  }
});

export const Footer = styled("footer", {
  width: "100%",
  padding: "4rem 0",
  borderTop: "1px solid #ffffff50",

  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
});
