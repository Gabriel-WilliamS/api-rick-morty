import Image from "next/image";
import { ButtonCard } from "../ButtonCard";
import { CharacterType } from "../CharacterType";
import Link from "next/link";
import { CharacterProps } from "../../types/character";

import {
  Container,
  Id,
  Name,
  Details,
  EllipseBackground,
  CardContainer,
  ImageContainer
} from "./styles";

interface CardProps {
  character: CharacterProps;
}

export const Card = ({ character }: CardProps) => {
  return (
    <Container>
      <ImageContainer color={character.gender}>
        <Image src={character.image} alt="" width={229} height={229} />
      </ImageContainer>

      <CardContainer>
        <Id>#{character.id.toString().padStart(3, "0")}</Id>
        <Name>{character.name}</Name>

        <CharacterType name={character.gender} color={character.gender} />

        <Details>
          <div>
            <strong>{character.origin.name}</strong>
            <span>Origin</span>
          </div>
          <div>
            <strong>{character.species}</strong>
            <span>Species </span>
          </div>
        </Details>

        <EllipseBackground color={character.gender} />

        <Link href={`/character/${character.id}`}>
          <ButtonCard color={character.gender} />
        </Link>
      </CardContainer>
    </Container>
  );
};
