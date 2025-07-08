import ExternalLinkButton from "./ExternalLinkButton";
import ProjectBadge from "./ProjectBadge";

export default function ProjectCard({ project }) {
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
    <div className="
        grid grid-cols-1 xl:grid-cols-2 p-4
        border-2 rounded-xl bg-white border-blue-400 shadow-md
        ">
      {/* Thumbnail + CTA + Roles */}
      <div className="flex flex-col gap-3 mr-3 h-full justify-between">
        <div>
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
          <h4 className="text-xs">Demos:</h4>
          <div className="flex gap-1 justify-center">{demoUrlElements}</div>
        </div>
        <div>
          <h4 className="text-xs">Repos:</h4>
          <div className="flex gap-1 justify-center">{repoUrlElements}</div>
        </div>
          <div>
            <h4 className="text-xs">Roles:</h4>
            <div className="flex flex-wrap gap-1 justify-center">{roleElements}</div>
          </div>
      </div>

      {/* Title + Description + Skills */}
      <div className="flex flex-col h-full justify-between">
        <div>
          <h3 className="mb-3">{project.name}</h3>
          <p className="mb-4">Project description. To be implemented on the es.json and en.json files.</p>
        </div>
        <div>
          <h4 className="text-xs">Related skills:</h4>
          <div className="flex flex-wrap gap-1 justify-center">{mainSkillElements}</div>
          <div className="flex flex-wrap gap-1 justify-center">{secondarySkillElements}</div>
        </div>
      </div>
    </div>
  );
}
