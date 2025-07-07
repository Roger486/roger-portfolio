import { projects } from "../../data/project-list";
import { hardSkills } from "../../data/hard-skill-list";

export default function Projects() {
  const project = projects[0];

  return (
    <section className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-4">Proyectos</h2>

      <div
        className="
        grid grid-cols-1 md:grid-cols-8 gap-4 p-4
        border-2 rounded-xl bg-white border-blue-400 shadow-md
        "
      >
        {/* Thumbnail + CTA */}
        <div className="col-span-3">
          <div className="mb-2">
            <img
              src={project.thumbnail}
              alt="Thumbnail"
              className="
                rounded border-1 border-black/20 shadow
                hover:scale-105 transition duration-300
              "
            />
          </div>

          <div className="flex flex-col gap-1">
            <h4>Demo URLs:</h4>
            <div className="flex gap-1 justify-center text-center">
              {project.demoUrls.map((demo) => {
                return (
                  <a
                    key={demo.url}
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-sm rounded px-2 min-w-15 text-white bg-blue-600
                      hover:bg-blue-400
                    "
                  >
                    {demo.label}
                  </a>
                );
              })}
            </div>

            <h4>Repo URLs:</h4>
            <div className="flex gap-1 justify-center text-center">
              {project.repoUrls.map((repo) => {
                return (
                  <a
                    key={repo.url}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-sm border rounded px-2 min-w-15 border-black/20
                      hover:bg-gray-200
                    "
                  >
                    {repo.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Title + text + roles + skills */}
        <div className="col-span-5">
          <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
          <h4 className="font-semibold mb-2">Project description:</h4>
          <p className="text-sm mb-2">
            Project description. To be implemented on the es.json and en.son
            files.
          </p>
          <h4>Roles:</h4>
          <div className="flex flex-wrap gap-2">
            {project.roles.map((role) => {
              return <span key={role} className="text-sm bg-orange-300 rounded px-2">{role}</span>;
            })}
          </div>
          <div>
            <h4>Main Skills:</h4>
            <div className="flex flex-wrap gap-2">
              {project.mainSkillsKeys.map((skillKey) => {
                const foundSkill = hardSkills.find(
                  (hardSkill) => hardSkill.key === skillKey
                );
                const skillName = foundSkill ? foundSkill.name : skillKey;
                return <span key={skillKey} className="text-sm bg-orange-300 rounded px-2">{skillName}</span>;
              })}
            </div>
            <h4>Secondary Skills:</h4>
            <div className="flex flex-wrap gap-2">
              {project.secondarySkillsKeys.map((skillKey) => {
                const foundSkill = hardSkills.find(
                  (hardSkill) => hardSkill.key === skillKey
                );
                const skillName = foundSkill ? foundSkill.name : skillKey;
                return <span key={skillKey} className="text-sm bg-orange-300 rounded px-2">{skillName}</span>;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
