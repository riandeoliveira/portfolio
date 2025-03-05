import { Icon } from "@/assets/icons";
import { Field } from "@/composables/field";
import type { ReactElement } from "react";

export const ResumeDownloadLink = (): ReactElement => {
  return (
    <Field.Link
      href="/Rian_Dias_de_Oliveira.pdf"
      download
      className="gap-2 group/link"
    >
      Baixar Currículo
      <Icon.HiDownload
        size={20}
        className="transition-all group-hover/link:animate-bounce"
      />
    </Field.Link>
  );
};
