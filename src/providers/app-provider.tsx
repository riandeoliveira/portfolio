import type { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { AppModeSwitcher } from "@/components/shared/app-mode-switcher";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { Toaster } from "@/components/shared/toaster";
import { useI18n } from "@/hooks/use-i18n";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const { language, t } = useI18n();

  return (
    <>
      <Helmet htmlAttributes={{ lang: language }}>
        <meta name="description" content={t("meta_description")} />
        <meta name="keywords" content={t("meta_keywords")} />
        <title>{t("home_page_head_title")}</title>
      </Helmet>
      {children}
      <Toaster />
      <AppModeSwitcher />
      <LanguageSwitcher />
    </>
  );
};
