import {
  ContactSection,
  SocialMediasContainer,
  SocialMedia,
} from "../styles/Contact";
import { TitleContainer, Title, Subtitle } from "../styles/global/global";
import {
  SiGmail,
  SiLinkedin,
  SiWhatsapp,
  SiGithub,
  SiInstagram,
} from "react-icons/si";

export const Contact: React.FC = () => {
  return (
    <ContactSection>
      <TitleContainer>
        <Title>Contato</Title>
        <Subtitle>Onde me encontrar</Subtitle>
      </TitleContainer>
      <SocialMediasContainer>
        <SocialMedia>
          <SiGmail />
        </SocialMedia>
        <SocialMedia>
          <SiLinkedin />
        </SocialMedia>
        <SocialMedia>
          <SiWhatsapp />
        </SocialMedia>
        <SocialMedia>
          <SiGithub />
        </SocialMedia>
        <SocialMedia>
          <SiInstagram />
        </SocialMedia>
      </SocialMediasContainer>
    </ContactSection>
  );
};

// Instagram, LinkedIn, WhatsApp, GitHub, Gmail
