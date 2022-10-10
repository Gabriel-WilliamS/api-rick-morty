import { Container } from "./styles";

interface ButtonCardProps {
  color: "Male" | "Female" | "Genderless" | "unknown";
}

export const ButtonCard = ({ color }: ButtonCardProps) => {
  return <Container color={color}>More Details</Container>;
};
