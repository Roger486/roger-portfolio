export default function SoftSkillCard({ skill }) {
  return (
    <div className="
      border-2 border-blue-400 bg-gray-100/50 rounded-lg p-2 shadow-md
      flex flex-col justify-center
      transition duration-300
      hover:bg-gray-100 hover:shadow-xl"
    >
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-4">
        <span
          className="rounded-full p-2"
          style={{ backgroundColor: skill.backgroundColor }}
        >
          <skill.icon size="30px" color={skill.color} />
        </span>
        <h4 className="font-semibold">{skill.name}</h4>
        </div>
        <p>{skill.description}</p>
      </div>
    </div>
  );
}
