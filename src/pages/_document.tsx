import { Head, Html, Main, NextScript } from "next/document";

const Document = (): JSX.Element => {
  return (
    <Html lang="pt-br">
      <Head>
        <meta
          name="description"
          content="Meu portfólio pessoal, com informações sobre mim, tecnologias que utilizo, meus projetos e links para minhas redes sociais."
        />
        <meta
          name="keywords"
          content="React, NextJS, TypeScript, Styled Components"
        />
        <meta name="author" content="Rian Oliveira" />
        <meta name="theme-color" content="#060526" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
