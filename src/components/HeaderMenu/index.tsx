import Image from "next/image";
import { Menu, SocialMedia } from "./styles";

import logoImg from "../../assets/logo.png";
import logoLinkedinImg from "../../assets/logoLinkedin.svg";
import logoGithubImg from "../../assets/logoGitHub.svg";
import { useRouter } from "next/router";

export const HeaderMenu = () => {
  const router = useRouter();

  return (
    <Menu>
      <Image src={logoImg} alt="logo rickmorty" onClick={() => router.push("/")} />
      <SocialMedia>
        <a
          href="https://www.linkedin.com/in/gabriel-william-serrano/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={logoLinkedinImg} alt="logo linkedin" />
        </a>
        <a href="https://github.com/Gabriel-WilliamS" target="_blank" rel="noreferrer">
          <Image src={logoGithubImg} alt="logo github" />
        </a>
      </SocialMedia>
    </Menu>
  );
};
