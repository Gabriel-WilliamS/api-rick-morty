import { Container } from "./styles";

interface CharacterTypeProps {
  name: string;
  color: "Male" | "Female" | "Genderless" | "unknown";
}

export const CharacterType = ({ name, color }: CharacterTypeProps) => {
  return <Container color={color}>{name}</Container>;
};
