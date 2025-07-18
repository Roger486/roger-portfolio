import ExternalLinkButton from "../../features/projects/components/ExternalLinkButton";
import ProjectBadge from "../../features/projects/components/ProjectBadge";


/**
 * Renders a list of ExternalLinkButton components.
 *
 * Each button links to an external URL and displays an icon depending on the `destination` value.
 * 
 * See {@link ExternalLinkButton} documentation for icon and style details.
 *
 * @param {Array<{
 *   url: string,
 *   label: string,
 *   destination?: "default" | "github"
 * }>} urlObjectList - List of link data objects.
 * @returns {JSX.Element[]} Array of ExternalLinkButton components.
 */
export function renderExternalLinkButtons (urlObjectList) {
  return urlObjectList.map(({ url, label, destination }) => {
    return (
      <ExternalLinkButton
        key={url}
        url={url}
        label={label}
        destination={destination}
      />
    );
  });
}

/**
 * Creates a list of project badges (for roles or skills).
 * 
 * See {@link ProjectBadge} documentation for icon and style details.
 *
 * @param {string[]} skillKeyOrRoleList
 * List of strings with the name or key of each skill or role.
 *
 * @param {"role" | "main-skill" | "secondary-skill"} [type="role"]
 * The type of badge to show: role, main skill or secondary skill.
 *
 * @returns {JSX.Element[]} An array of ProjectBadge components.
 */
export function renderProjectBadges(skillKeyOrRoleList, type = "role") {
  return skillKeyOrRoleList.map((skillKeyOrRoleName) => (
    <ProjectBadge
      key={skillKeyOrRoleName}
      name={skillKeyOrRoleName}
      type={type}
    />
  ));
}