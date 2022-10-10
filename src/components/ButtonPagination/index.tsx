import { MouseEventHandler } from "react";
import { Container } from "./styles";

interface ButtonPaginationProps {
  page: number;
  isActive?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const ButtonPagination = ({
  page,
  isActive = false,
  ...rest
}: ButtonPaginationProps) => {
  return (
    <Container isActive={isActive} {...rest}>
      {page}
    </Container>
  );
};
