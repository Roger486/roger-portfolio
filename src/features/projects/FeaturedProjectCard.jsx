import ExternalLinkButton from "./ExternalLinkButton";
import ProjectBadge from "./ProjectBadge";

export default function FeaturedProjectCard({ project }) {
  const demoUrlElements = project.demoUrls.map((demo) => {
    return <ExternalLinkButton key={demo.url} url={demo.url} label={demo.label} destination={demo.destination} />;
  });

  const repoUrlElements = project.repoUrls.map((repo) => {
    return <ExternalLinkButton key={repo.url} url={repo.url} label={repo.label} destination={repo.destination} />;
  });

  const roleElements = project.roles.map((role) => {
    return <ProjectBadge key={role} name={role} type="role" />;
  });

  const mainSkillElements = project.mainSkillsKeys.map((skillKey) => {
    return <ProjectBadge key={skillKey} name={skillKey} type="main-skill" />;
  });

  const secondarySkillElements = project.secondarySkillsKeys.map((skillKey) => {
    return <ProjectBadge key={skillKey} name={skillKey} type="secondary-skill" />;
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
        <div className="flex justify-center mb-4">
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
