import { Link } from "react-router-dom";
import { OuterSpaceBackground } from "@/components/backgrounds/outer-space-background";
import { Section } from "@/components/shared/section";
import { useAppMode } from "@/hooks/use-app-mode";
import { useI18n } from "@/hooks/use-i18n";

export const NotFoundPage = () => {
  const { appMode } = useAppMode();
  const { t } = useI18n();

  return (
    <>
      {appMode === "quality" && <OuterSpaceBackground />}
      <div className="min-h-screen flex flex-col gap-8 items-center justify-center text-zinc-50">
        <Section.Title isHighlighted>
          {`404 - ${t("page_not_found")}`}
        </Section.Title>
        <Link to="/" className="underline text-purple-500">
          {t("go_back_to_home")}
        </Link>
      </div>
    </>
  );
};
