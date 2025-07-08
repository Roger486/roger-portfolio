export default function ProjectCard({ project }) {
  return (
    <div>
      {/* Thumbnail + CTA + Roles */}
      <div>
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
        <div>CTA</div>
        <div>Roles</div>
      </div>

      {/* Title + Description + Skills */}
      <div>
        <h3>{project.name}</h3>
        <p>Project description. To be implemented on the es.json and en.json files.</p>
        <div>
          <div>Main Skills</div>
          <div>Secondary Skills</div>
        </div>
      </div>
    </div>
  );
}
