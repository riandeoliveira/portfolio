import { ReactNode } from "react";
import { useSectionStore } from "store/useSectionStore";
import { SectionType } from "types";
import { State } from "types/state";
import * as S from "./styles";

type NavItemProps = {
  section: SectionType;
  children: ReactNode;
};

export const NavItem = ({ section, children }: NavItemProps): JSX.Element => {
  const sectionStore: State.Section = useSectionStore();

  const selectedButton: boolean = sectionStore.name === section;

  return (
    <S.Item>
      <S.Button
        type="button"
        selectedButton={selectedButton}
        onClick={() => sectionStore.select(section)}
      >
        {children}
      </S.Button>
    </S.Item>
  );
};
