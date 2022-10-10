export interface CharacterProps {
  id: number;
  name: string;
  gender: "Male" | "Female" | "Genderless" | "unknown";
  origin: {
    name: string;
  };
  species: string;
  image: string;
}
