import { Image } from "@/components/image";
import { NeonBackground } from "@/components/neon-background";
import { Tooltip } from "@/components/tooltip";
import { cn } from "@/lib/utils";
import { useEffect, useState, type ReactElement } from "react";

export const ProfileAvatar = (): ReactElement => {
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
    <Tooltip title="Clique aqui!" open={isTooltipOpen}>
      <button
        type="button"
        onClick={() => setIsRotating((previousState) => !previousState)}
        className={cn(
          "animate-growUp",
          isRotating === true ? "animate-rotatePrimary" : "",
          isRotating === false ? "animate-rotateSecondary" : "",
        )}
      >
        <NeonBackground className="rounded-full p-0 w-64 h-64 tablet-s:w-56 tablet-s:h-56">
          <div
            className={cn(
              "bg-zinc-900 gap-2 flex items-center justify-center w-[248px] h-[248px] rounded-full absolute translate-x-1 translate-y-1 flex-col tablet-s:w-[216px] tablet-s:h-[216px]",
              isRotating === true ? "animate-toggleSecondary" : "",
              isRotating === false ? "animate-togglePrimary" : "",
            )}
          >
            <span
              style={{ transform: "rotateY(180deg)" }}
              className="block bg-clip-text text-sm hover:animate-pulse font-semibold text-transparent bg-gradient-to-b from-indigo-500 to-purple-500 tablet-s:text-xs"
            >
              Você encontrou um Easter Egg!
            </span>
            <a
              href="https://youtu.be/uHgt8giw1LY?si=MovtNeUKU20Qt6FQ"
              target="_blank"
              rel="noreferrer"
              style={{ transform: "rotateY(180deg)" }}
              className="block bg-clip-text hover:animate-pulse font-semibold text-transparent bg-gradient-to-b from-indigo-500 to-purple-500 tablet-s:text-sm"
            >
              Para onde esse link leva?
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
