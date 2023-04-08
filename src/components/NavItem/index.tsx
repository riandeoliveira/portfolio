import { ReactNode } from "react";
import { useSectionStore } from "store/useSectionStore";
import { SectionType } from "types";
import { State } from "types/state";
import styles from "./styles.module.scss";

type NavItemProps = {
  section: SectionType;
  children: ReactNode;
};

export const NavItem = ({ section, children }: NavItemProps): JSX.Element => {
  const sectionStore: State.Section = useSectionStore();

  return (
    <li className={styles.item}>
      <button
        type="button"
        onClick={() => sectionStore.select(section)}
        className={styles.button}
      >
        {children}
      </button>
    </li>
  );
};
