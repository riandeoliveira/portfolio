import { Field } from "@/composables/field";
import { useI18n } from "@/hooks/use-i18n";
import type { ReactElement } from "react";
import { BaseIcon } from "./base-icon";

export const ResumeDownloadLink = (): ReactElement => {
  const { t } = useI18n();

  return (
    <Field.Link
      href="/Rian_Dias_de_Oliveira.pdf"
      download
      className="gap-2 group/link"
    >
      {t("download_resume")}
      <BaseIcon
        name="download"
        className="w-5 h-5 transition-all group-hover/link:animate-bounce"
      />
    </Field.Link>
  );
};
