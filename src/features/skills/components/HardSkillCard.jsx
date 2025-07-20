export default function HardSkillCard({ skill }) {
  return (
    <div
      className="
        
        flex items-center gap-3
      "
    >
      <span
        className="rounded-full border p-1 shrink-0"
        style={{ backgroundColor: skill.backgroundColor, borderColor: skill.color }}
      >
        <skill.icon size="20px" color={skill.color} />
      </span>
      <h4 className="font-semibold truncate">
        {skill.name}
      </h4>
    </div>
  );
}