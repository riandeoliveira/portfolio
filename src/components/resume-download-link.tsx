import { Icon } from "@/assets/icons";
import { Field } from "@/composables/field";
import { useI18n } from "@/hooks/use-i18n";
import type { ReactElement } from "react";

export const ResumeDownloadLink = (): ReactElement => {
  const { t } = useI18n();

  return (
    <Field.Link
      href="/Rian_Dias_de_Oliveira.pdf"
      download
      className="gap-2 group/link"
    >
      {t("download_resume")}
      <Icon.HiDownload
        size={20}
        className="transition-all group-hover/link:animate-bounce"
      />
    </Field.Link>
  );
};
