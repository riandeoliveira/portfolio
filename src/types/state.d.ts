import { SectionNameType } from "types";

export namespace State {
  export type Section = {
    name: SectionNameType;
    select(name: SectionNameType): void;
  };
}
