import data from "./data/data.json";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Tech } from "./components/Tech";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  const { stack_code, stack_name } = data;

  const handleGetTech = stack_code.map((item, i) => (
    <Tech code={stack_code[i]} name={stack_name[i]} />
  ));

  return (
    <>
      <Header />
      <Main getTech={handleGetTech} />
      <Footer />
    </>
  );
};
