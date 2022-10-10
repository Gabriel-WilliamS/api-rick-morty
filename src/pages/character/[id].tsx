import axios from "axios";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { HeaderMenu } from "../../components/HeaderMenu";
import {
  Container,
  Content,
  PortalDivider,
  CharacterDatails,
  ImageContainer,
  EpisodesContainer,
  EpisodesList
} from "../../styles/pages/character";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import rectangleDownImg from "../../assets/RectangleDown.svg";
import rectangleUpImg from "../../assets/RectangleUp.svg";
import portalDividerImg from "../../assets/portalDivider.png";
import arrowLeftImg from "../../assets/arrowLeft.svg";

interface CharacterProps {
  character: {
    id: string;
    name: string;
    image: string;
    status: string;
    gender: string;
    species: string;
    type: string;
    origin: {
      name: string;
    };
    location: {
      name: string;
    };
    episode: {
      name: string;
      episode: string;
    }[];
  };
}
const Character = ({ character }: CharacterProps) => {
  const router = useRouter();
  return (
    <Container>
      <HeaderMenu />
      <div>
        <button onClick={() => router.back()}>
          <Image src={arrowLeftImg} alt="" />
          Voltar
        </button>
      </div>
      <Content>
        <CharacterDatails>
          <ImageContainer>
            <Image
              src={character.image}
              alt={`Imagem do personagem ${character.name}`}
              width="200"
              height="200"
            />
          </ImageContainer>
          <h1>
            {character.name}
            <span>#00{character.id}</span>
          </h1>
          <ul>
            <li>
              <strong>Gender : </strong>
              <span>{character.gender}</span>
            </li>
            <li>
              <strong>Status : </strong>
              <span>{character.status}</span>
            </li>
            <li>
              <strong>Specie : </strong>
              <span>{character.species}</span>
            </li>
            <li>
              <strong>Origin : </strong>
              <span>{character.origin.name}</span>
            </li>
            <li>
              <strong>Type : </strong>
              <span>{character.type === "" ? "Undefined" : character.type}</span>
            </li>
          </ul>
        </CharacterDatails>

        <PortalDivider>
          <Image src={rectangleDownImg} alt="rectangle down" />
          <Image src={portalDividerImg} alt="portal divider" width={60} height={60} />
          <Image src={rectangleUpImg} alt="rectangle up" />
        </PortalDivider>

        <EpisodesContainer>
          <h1>Episodes with participation</h1>

          <EpisodesList>
            <SimpleBar style={{ height: "100%" }}>
              <ul>
                {character.episode.map((episode) => (
                  <li key={episode.name}>
                    {episode.episode} - {episode.name}
                  </li>
                ))}
              </ul>
            </SimpleBar>
          </EpisodesList>
        </EpisodesContainer>
      </Content>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<any, { id: string }> = async ({
  params
}) => {
  const characterId = params?.id;

  const { data } = await axios.post("https://rickandmortyapi.com/graphql", {
    query: `
    query {
      character(id:${characterId}) {
        id
        name
         image
        type
        status
        species
        gender
        origin{
          name
        }
        location{
          name
        }
        episode{
          name
          episode
        }
      }
    }
    `
  });

  const { character } = data.data;

  return {
    props: {
      character: {
        ...character
      }
    }
  };
};

export default Character;
