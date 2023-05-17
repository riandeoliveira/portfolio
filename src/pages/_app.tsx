import type { AppProps } from "next/app";
import Head from "next/head";
import "styles/_global.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Portfólio | Rian Oliveira</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
