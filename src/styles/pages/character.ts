import { padding } from "@mui/system";
import { styled } from "..";

export const Container = styled("main", {
  width: "100%",
  height: "100vh",
  padding: "0 3rem",
  background: "$linearBackground",

  "> div:nth-child(2)": {
    display: "flex",
    maxWidth: 1180,
    margin: "2rem auto 0",

    button: {
      display: "flex",
      color: "white",
      fontSize: "2rem",
      alignItems: "center",
      background: "none",
      border: "none",
      cursor: "pointer"
    }
  },

  "@sm": {
    height: "100%"
  }
});

export const Content = styled("div", {
  maxWidth: 1180,
  display: "grid",
  gridTemplateColumns: "1fr 60px 1fr",
  gridTemplateRows: "1fr",
  margin: "8rem auto",

  "@sm": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20
  }
});

export const CharacterDatails = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "52.3rem",

  h1: {
    fontWeight: "$titleAndCardName",
    fontSize: "5rem",
    marginBottom: ".8rem",
    position: "relative",
    marginTop: "2rem",

    span: {
      fontSize: "2rem",
      position: "absolute",
      left: 0,
      top: -15
    }
  },

  ul: {
    marginTop: "8px",
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: 6
  },

  strong: {
    fontSize: "2rem"
  }
});

export const ImageContainer = styled("div", {
  alignSelf: "center",

  img: {
    borderRadius: "50%"
  }
});

export const PortalDivider = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 20,

  "@sm": {
    display: "none"
  }
});

export const EpisodesContainer = styled("div", {
  height: "50vh",
  display: "flex",
  flexDirection: "column",
  marginLeft: 18,

  h1: {
    marginBottom: "1.6rem"
  },

  "@sm": {
    margin: 0,
    height: "fit-content",
    maxHeight: "60rem",
    paddingBottom: "5rem"
  }
});

export const EpisodesList = styled("ul", {
  display: "flex",
  height: "100%",

  flexDirection: "column",

  ul: {
    display: "flex",
    flexDirection: "column",
    gap: 8
  }
});
