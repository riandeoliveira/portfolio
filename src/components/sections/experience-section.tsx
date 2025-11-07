import { Icon } from "@/assets/icons";
import type { Experience } from "@/data/experiences";
import { experiences } from "@/data/experiences";
import { useI18n } from "@/hooks/use-i18n";
import { GradientBackground } from "../backgrounds/gradient-background";
import { InfiniteMovingCards } from "../cards/infinite-moving-cards";
import { Image } from "../shared/image";
import { Link } from "../shared/link";
import { Section } from "../shared/section";

export const ExperienceSection = () => {
  const { t } = useI18n();

  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-48 px-4 text-zinc-50"
    >
      <div className="w-300 flex flex-col gap-8">
        <Section.Title isHighlighted className="text-white">
          {t("companies_where_i_worked")}
        </Section.Title>
        <Section.Description className="text-white">
          {t("experience_description")}
        </Section.Description>
        <InfiniteMovingCards
          items={experiences}
          forEachItem={(data) => <ExperienceCard {...data} />}
          direction="right"
          speed="normal"
          className="mt-8"
        />
      </div>
    </section>
  );
};

type ExperienceCardProps = Omit<Experience, "id">;

const ExperienceCard = ({
  logo,
  company,
  info,
  linkedInUrl,
  siteUrl,
}: ExperienceCardProps) => {
  const { t, language } = useI18n();

  const langKey = language === "pt-BR" ? "ptBr" : "enUs";

  return (
    <GradientBackground className="rounded-xl p-px">
      <div className="relative w-md max-w-full h-full shrink-0 rounded-xl p-6 bg-linear-to-b from-zinc-800 to-zinc-950 flex flex-col justify-between gap-4">
        <div className="flex gap-4">
          <Image
            src={logo}
            alt={`${t("company_logo")}: ${company}`}
            width={96}
            height={96}
            className="w-24 h-24 rounded-xl"
          />
          <div className="flex flex-col">
            <strong className="text-xl">{company}</strong>
            <span className="text-sm">{info[langKey].title}</span>
            <span className="text-sm text-zinc-400">
              {info[langKey].period}
            </span>
          </div>
        </div>
        <p className="text-zinc-400 text-justify text-sm">
          {info[langKey].description}
        </p>
        <div className="flex justify-between">
          <div className="group w-fit">
            <Link
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm justify-start font-medium gap-2 hover:bg-transparent group-hover:animate-pulse p-0"
            >
              <Icon.LinkedIn className="w-6 h-6 [&>g>path]:fill-transparent" />
              {t("access_linkedin")}
            </Link>
            <GradientBackground className="w-full h-px p-0 opacity-0 group-hover:opacity-100 transition-opacity max-s-600:hidden mt-0.5" />
          </div>
          <div className="group w-fit">
            <Link
              href={siteUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm justify-end font-medium gap-2 hover:bg-transparent group-hover:animate-pulse p-0"
            >
              <Icon.OutlineExternalLink className="w-6 h-6 [&>g>path]:fill-transparent" />
              {t("access_site")}
            </Link>
            <GradientBackground className="w-full h-px p-0 opacity-0 group-hover:opacity-100 transition-opacity max-s-600:hidden mt-0.5" />
          </div>
        </div>
      </div>
    </GradientBackground>
  );
};
