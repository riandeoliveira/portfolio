import { ReactNode } from "react";
import { useSectionStore } from "store/useSectionStore";
import { SectionNameType } from "types";
import { State } from "types/state";
import styles from "./styles.module.scss";

type NavItemProps = {
  section: SectionNameType;
  children: ReactNode;
};

export const NavItem = ({ section, children }: NavItemProps): JSX.Element => {
  const sectionStore: State.Section = useSectionStore();

  const selectedButton: boolean = sectionStore.name === section;

  return (
    <li className={styles.item}>
      <button
        type="button"
        onClick={() => sectionStore.select(section)}
        data-selected={selectedButton}
        className={styles.button}
      >
        {children}
      </button>
    </li>
  );
};
