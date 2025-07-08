import { FaGithub, FaLink } from "react-icons/fa";
import { hardSkills } from "../../data/hard-skill-list";
import ExternalLinkButton from "./ExternalLinkButton";

export default function FeaturedProjectCard({ project }) {
  const demoUrlElements = project.demoUrls.map((demo) => {
    return (
      <a
        key={demo.url}
        href={demo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex gap-1 items-center
          text-sm rounded px-3 py-1 min-w-15 text-white bg-blue-700
          transition duration-300
          hover:bg-blue-400
        "
      >
        <FaLink /> {demo.label}
      </a>
    );
  });

  const repoUrlElements = project.repoUrls.map((repo) => {
    return <ExternalLinkButton key={repo.url} url={repo.url} label={repo.label} destination={repo.destination} />;
  });

  const roleElements = project.roles.map((role) => {
    return (
      <span
        key={role}
        className="text-sm text-white border  bg-blue-400 rounded px-2"
      >
        {role}
      </span>
    );
  });

  const mainSkillElements = project.mainSkillsKeys.map((skillKey) => {
    const foundSkill = hardSkills.find(
      (hardSkill) => hardSkill.key === skillKey
    );
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
    const foundSkill = hardSkills.find(
      (hardSkill) => hardSkill.key === skillKey
    );
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

  return (
    <div
      className="
        grid grid-cols-1 md:grid-cols-8 p-4
        border-2 rounded-xl bg-white border-blue-400 shadow-md
        "
    >
      {/* Thumbnail + CTA */}
      <div className="col-span-3 md:mr-3">
        <div className="mb-4">
          <img
            src={project.thumbnail}
            alt="Thumbnail"
            className="
                rounded border border-black/20 shadow
                hover:scale-105 transition duration-300
              "
          />
        </div>

        <div>
          <h4>Demo URLs:</h4>
          <div className="mb-4 flex gap-1 justify-center text-center">
            {demoUrlElements}
          </div>

          <h4>Repo URLs:</h4>
          <div className="flex gap-1 justify-center text-center">
            {repoUrlElements}
          </div>
        </div>
      </div>

      {/* Title + text + roles + skills */}
      <div className="col-span-5 md:border-l-2 border-blue-400 pl-3">
        <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
        <h4 className="font-semibold mb-2">Project description:</h4>
        <p className="text-sm mb-2">
          Project description. To be implemented on the es.json and en.json
          files.
        </p>
        <h4 className="mt-4 font-semibold">Roles:</h4>
        <div className="flex flex-wrap gap-1">{roleElements}</div>
        <div>
          <h4 className="mt-4 font-semibold">Main Skills:</h4>
          <div className="flex flex-wrap gap-2">{mainSkillElements}</div>
          <h4 className="mt-4 font-semibold">Secondary Skills:</h4>
          <div className="flex flex-wrap gap-2">{secondarySkillElements}</div>
        </div>
      </div>
    </div>
  );
}
