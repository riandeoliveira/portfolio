import { useI18n } from "@/hooks/use-i18n";
import { type ReactElement, useEffect } from "react";

export const MetadataArea = (): ReactElement => {
  const { language, t } = useI18n();

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  return (
    <>
      <meta name="description" content={t("meta_description")} />
      <meta name="keywords" content={t("meta_keywords")} />
      <title>{t("home_page_head_title")}</title>
    </>
  );
};
