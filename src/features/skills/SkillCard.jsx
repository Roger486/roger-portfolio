export default function SkillCard({ skill }) {

  return (
    <div className="
      border-2 border-gray-300 bg-blue-200/50 rounded-lg p-4 shadow-md
      flex flex-col items-center text-center
      transition hover:bg-blue-200 hover:scale-105 hover:shadow-xl duration-300"
    >
      <div
        className="rounded-full p-3 mb-3"
        style={{ backgroundColor: skill.backgroundColor }}
      >
        <skill.icon size="50px" color={skill.color} />
      </div>
      <h4 className="text-lg font-semibold mb-1">{skill.name}</h4>
      <p className="text-sm text-gray-600">{skill.description}</p>
    </div>
  );
}
