import Home from "./components/Home";
import About from "./components/About";
import Stack from "./components/Stack";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

const App = (): JSX.Element => {
  return (
    <>
      <Home />
      <About />
      <Stack />
      <Project />
      <Resume />
      <Footer />
    </>
  );
};

export default App;
