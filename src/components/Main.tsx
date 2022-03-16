import { MainArea } from "../styles/Main";
import { Home } from "./Home";
import { Stack } from "./Stack";

interface MainProps {
  getTech: JSX.Element[];
}

export const Main: React.FC<MainProps> = ({ getTech }) => {
  return (
    <MainArea>
      <Home />
      <Stack techs={getTech} />
    </MainArea>
  );
};
