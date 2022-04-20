import { ThemeProvider } from "styled-components";
import dark from "./styles/theme/dark";
import Home from "./components/Home";
import About from "./components/About";
import Stack from "./components/Stack";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={dark}>
      <Home />
      <About />
      <Stack />
      <Project />
      <Resume />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
