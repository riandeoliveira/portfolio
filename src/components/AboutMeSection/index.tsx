import { Section } from "components/Section";
import { FiDownload } from "react-icons/fi";
import * as S from "./styles";

export const AboutMeSection = (): JSX.Element => {
  return (
    <Section title="Sobre Mim 🙋‍♂️">
      <S.SectionBox>
        <S.Box>
          <S.Description>
            Olá, me chamo Rian, e é um prazer ver você por aqui! Desde pequeno,
            sempre fui fascinado por ciência e tecnologia, e hoje tenho a
            oportunidade de exercer minha criatividade fazendo o que tanto amo.
            Nos últimos 2 anos, venho desenvolvendo e aprimorando minhas
            habilidades em programação. Possuo uma ótima experiência com
            tecnologias tanto da parte de front-end quanto de back-end, algumas
            delas são: NodeJS; ExpressJS; React; NextJS; TypeScript; entre
            outras. Apesar do meu foco estar concentrado em front-end, estou
            sempre aberto a novas oportunidades para continuar aprendendo cada
            vez mais.
          </S.Description>
          <S.DownloadButton
            href="/assets/documents/CV-Rian-Dias-de-Oliveira.pdf"
            download
          >
            Baixar currículo <FiDownload size={18} />
          </S.DownloadButton>
          {/* <Button variant="contained" endIcon={<FiDownload />}>
            Baixar currículo
          </Button> */}
        </S.Box>
        <S.Image
          src="/assets/images/cyberpunk-city.gif"
          alt="A GIF of a pixelated cyberpunk city at night"
          width={500}
          height={280}
        />
      </S.SectionBox>
    </Section>
  );
};
