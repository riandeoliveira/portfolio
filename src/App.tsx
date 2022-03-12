import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { About } from "./styles/styles";
import { Stack } from "./styles/styles";
import { Footer } from "./components/Footer";
import { Contact } from "./styles/styles";

export const App: React.FC = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <About />
        <Stack />
      </Main>
      <Footer>
        <Contact />
      </Footer>
    </>
  );
};
