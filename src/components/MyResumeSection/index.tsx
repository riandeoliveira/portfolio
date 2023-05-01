import { Section } from "components/Section";
import { useState } from "react";
import * as S from "./styles";

export const MyResumeSection = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <Section title="Meu currículo 📄">
      {isLoading && (
        <S.LoadingBox>
          <S.Loading />
        </S.LoadingBox>
      )}
      <S.Iframe
        src="https://drive.google.com/file/d/1Nvo3TA8TwzySZiWVxXhDaKa8G_nqX7ui/preview"
        width="640"
        height="480"
        allow="autoplay"
        onLoad={() => setIsLoading(false)}
        isLoading={isLoading}
      ></S.Iframe>
    </Section>
  );
};
