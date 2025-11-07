import { Icon } from "@/assets/icons";
import { useI18n } from "@/hooks/use-i18n";
import { GradientBackground } from "../backgrounds/gradient-background";
import { Link } from "./link";

export const DownloadResumeLink = () => {
  const { t } = useI18n();

  return (
    <GradientBackground className="rounded-xl p-0.5">
      <Link
        href="/Rian_Dias_de_Oliveira.pdf"
        download
        className="gap-2 group/link"
      >
        {t("download_resume")}
        <Icon.Download className="w-5 h-5 transition-all group-hover/link:animate-bounce" />
      </Link>
    </GradientBackground>
  );
};
