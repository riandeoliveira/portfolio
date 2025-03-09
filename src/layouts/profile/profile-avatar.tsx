import { Image } from "@/components/image";
import { NeonBackground } from "@/components/neon-background";
import { Tooltip } from "@/components/tooltip";
import { useI18n } from "@/hooks/use-i18n";
import { cn } from "@/lib/utils";
import { type ReactElement, useEffect, useState } from "react";

export const ProfileAvatar = (): ReactElement => {
  const { t } = useI18n();

  const [isRotating, setIsRotating] = useState<boolean | null>(null);
  const [isTooltipOpen, setIsTooltipOpen] = useState<true | undefined>();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTooltipOpen(true);

      setTimeout(() => {
        setIsTooltipOpen(undefined);
      }, 3000);
    }, 15000);

    return (): void => clearInterval(interval);
  }, []);

  return (
    <Tooltip title={t("click_here")} open={isTooltipOpen}>
      <button
        type="button"
        onClick={(): void => setIsRotating((previousState) => !previousState)}
        className={cn(
          "animate-grow",
          isRotating === true ? "animate-rotate-primary" : "",
          isRotating === false ? "animate-rotate-secondary" : "",
        )}
      >
        <NeonBackground className="rounded-full p-0 w-64 h-64 tablet-s:w-56 tablet-s:h-56">
          <div
            className={cn(
              "bg-zinc-900 gap-2 flex items-center justify-center w-[248px] h-[248px] rounded-full absolute translate-x-1 translate-y-1 flex-col tablet-s:w-[216px] tablet-s:h-[216px]",
              isRotating === true ? "animate-toggle-secondary" : "",
              isRotating === false ? "animate-toggle-primary" : "",
            )}
          >
            <span
              style={{ transform: "rotateY(180deg)" }}
              className="block bg-clip-text text-sm hover:animate-pulse font-semibold text-transparent bg-gradient-to-b from-indigo-500 to-purple-500 tablet-s:text-xs"
            >
              {t("you_found_an_easter_egg")}
            </span>
            <a
              href="https://youtu.be/uHgt8giw1LY?si=MovtNeUKU20Qt6FQ"
              target="_blank"
              rel="noreferrer"
              style={{ transform: "rotateY(180deg)" }}
              className="block bg-clip-text hover:animate-pulse font-semibold text-transparent bg-gradient-to-b from-indigo-500 to-purple-500 tablet-s:text-sm"
            >
              {t("where_does_this_link_lead")}
              <div className="h-px bg-gradient-to-b from-indigo-500 to-purple-500" />
            </a>
          </div>
          <Image
            src="https://i.imgur.com/0tAVYaU.png"
            alt="Imagem de perfil"
            width={248}
            height={248}
            skeletonClassName="w-[248px] h-[248px] tablet-s:w-[216px] tablet-s:h-[216px]"
            className="rounded-full absolute translate-x-1 translate-y-1 z-10 tablet-s:w-[216px] tablet-s:h-[216px]"
          />
        </NeonBackground>
      </button>
    </Tooltip>
  );
};
