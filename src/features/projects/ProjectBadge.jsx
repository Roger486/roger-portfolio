import { hardSkills } from "../../data/hard-skill-list";

export default function ProjectBadge({ name, type = "default" }) {
  let color = "#FFFFFF";
  let backgroundColor = "#000000";
  let displayName = name;
  const foundSkill = hardSkills.find((skill) => skill.key === name);

  if (type === "role") {
    backgroundColor = "#60A5FA";
  } else if (foundSkill) {

    displayName = foundSkill.name;

    if (type === "secondary-skill") {
      backgroundColor = "#00000080";
      color = "#F3F4F6";
    }
  
    if (type === "main-skill") {
      color = foundSkill?.color || "#FFFFFF";
      backgroundColor = foundSkill?.backgroundColor || "#000000";
    }
  }


  return (
    <span
      className="text-sm border rounded px-2 flex items-center gap-2"
      style={{
        color,
        backgroundColor,
      }}
    >
      {foundSkill && <foundSkill.icon />}{displayName}
    </span>
  );
}
/*
const mainSkillElements = project.mainSkillsKeys.map((skillKey) => {
  const foundSkill = hardSkills.find((hardSkill) => hardSkill.key === skillKey);
  const skillName = foundSkill ? foundSkill.name : skillKey;
  const skillBackgroundColor = foundSkill
    ? foundSkill.backgroundColor
    : "#000000";
  const skillColor = foundSkill ? foundSkill.color : "#FFFFFF";
  return (
    <span
      key={skillKey}
      className="text-sm rounded px-2 border"
      style={{
        color: skillColor,
        backgroundColor: skillBackgroundColor,
      }}
    >
      {skillName}
    </span>
  );
});

const secondarySkillElements = project.secondarySkillsKeys.map((skillKey) => {
  const foundSkill = hardSkills.find((hardSkill) => hardSkill.key === skillKey);
  const skillName = foundSkill ? foundSkill.name : skillKey;
  return (
    <span
      key={skillKey}
      className="text-sm bg-gray-100 border border-black/50 rounded px-2"
    >
      {skillName}
    </span>
  );
});
*/