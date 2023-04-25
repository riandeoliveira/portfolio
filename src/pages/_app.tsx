import { StyledComponentsRegistry } from "libs/registry";
import type { AppProps } from "next/app";
import Head from "next/head";
import "styles/_global.scss";
import "swiper/css";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <StyledComponentsRegistry>
        <Component {...pageProps} />
      </StyledComponentsRegistry>
    </>
  );
};

export default App;
