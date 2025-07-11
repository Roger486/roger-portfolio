import ExternalLinkButton from "../features/projects/components/ExternalLinkButton";
import ProjectBadge from "../features/projects/components/ProjectBadge";

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

export function renderProjectBadges(skillKeyOrRoleList, type = "role") {
  return skillKeyOrRoleList.map((skillKeyOrRoleName) => (
    <ProjectBadge
      key={skillKeyOrRoleName}
      name={skillKeyOrRoleName}
      type={type}
    />
  ));
}