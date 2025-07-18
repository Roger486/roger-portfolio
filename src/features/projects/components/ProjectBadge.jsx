import { hardSkills } from "../../../core/data/hard-skill-list";

/**
 * A visual badge for a project role or a hard skill.
 *
 * If the `name` matches a known hard skill key from {@link hardSkills hard-skill-list.js} and its `type` is skill related,
 * the badge will display the corresponding icon, full name, and color styles.
 * 
 * The `type` defines how the badge looks:
 * - `"role"`: Blue background, used for project roles.
 * - `"main-skill"`: Uses colors from the hard skill object.
 * - `"secondary-skill"`: Gray background with white text.
 * - `"default"`: Black background with white text.
 *
 * @component
 * @param {Object} props
 * @param {string} props.name - Role name or hard skill key.
 * @param {"role" | "main-skill" | "secondary-skill" | "default"} [props.type="default"] - The style type of the badge.
 * @returns {JSX.Element} A styled badge element.
 */
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