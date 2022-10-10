import { MouseEventHandler } from "react";
import { Container } from "./styles";

interface ButtonTypeProps {
  name: string;
  color: "male" | "female" | "genderless" | "unknown";
  isActive?: boolean;
  onClick: (name: string) => void;
}

export const ButtonType = ({
  name,
  color,
  onClick,
  isActive,
  ...rest
}: ButtonTypeProps) => {
  return (
    <Container color={color} onClick={() => onClick(name)} isActive={isActive} {...rest}>
      {name}
    </Container>
  );
};
