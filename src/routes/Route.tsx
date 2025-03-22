import { ProjectContextProvider } from "@/contexts/project-context";
import { useI18n } from "@/hooks/use-i18n";
import type { ReactElement } from "react";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";

type RouteProps = {
  page: () => ReactElement;
};

export const Route = ({ page: Page }: RouteProps): ReactElement => {
  const { language, t } = useI18n();

  return (
    <ProjectContextProvider>
      <Helmet>
        <html lang={language} />
        <meta name="description" content={t("meta_description")} />
        <meta name="keywords" content={t("meta_keywords")} />
        <title>{t("home_page_head_title")}</title>
      </Helmet>
      <ToastContainer theme="dark" toastClassName="!bg-zinc-900" />
      <Page />
    </ProjectContextProvider>
  );
};
