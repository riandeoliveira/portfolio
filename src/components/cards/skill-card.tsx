import type { Skill } from "@/data/skills";

type SkillCardProps = Omit<Skill, "id" | "name"> & {
  name?: string;
};

export const SkillCard = ({ name, color, icon: Icon }: SkillCardProps) => {
  return (
    <div className="flex flex-col items-center gap-2 flex-1 max-s-480:scale-90">
      <Icon />
      <div
        style={{ boxShadow: `0 0 32px ${color}` }}
        className="w-12 h-12 animate-pulse absolute rounded-xl"
      />
      {name && <span className="text-center">{name}</span>}
    </div>
  );
};
