import { type SocialMedia, socialMedias } from "@/data/social-medias";
import { GradientBackground } from "../backgrounds/gradient-background";
import { Tooltip } from "../shared/tooltip";

export const SocialMediasLayout = () => {
  return (
    <div className="flex gap-2 justify-center max-s-480:gap-0">
      {socialMedias.map(({ name, icon, url, id }) => (
        <NavLink name={name} icon={icon} url={url} key={id} />
      ))}
    </div>
  );
};

type NavLinkProps = Omit<SocialMedia, "id">;

const NavLink = ({ url, name, icon: Icon }: NavLinkProps) => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <div className="hover:scale-125 transition-transform max-s-480:scale-[0.8]">
          <GradientBackground className="rounded-xl p-px">
            <a href={url} target="_blank" rel="noreferrer" aria-label={name}>
              <Icon className="scale-100" />
            </a>
          </GradientBackground>
        </div>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <span>{name}</span>
      </Tooltip.Content>
    </Tooltip.Root>
  );
};
