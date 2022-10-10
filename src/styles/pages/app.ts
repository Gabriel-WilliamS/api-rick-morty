import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  background: "#fff"
});

export const Header = styled("header", {
  width: "100%",
  height: "11.9rem",
  maxWidth: 1180,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "0 auto"
});
