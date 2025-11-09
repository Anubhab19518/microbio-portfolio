interface SkillBadgeProps {
  skill: string;
  color: string;
}

export function SkillBadge({ skill, color }: SkillBadgeProps) {
  return (
    <div className={`${color} border-4 border-black px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-200`}>
      {skill}
    </div>
  );
}
