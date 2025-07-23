import { FaRegEye } from "react-icons/fa";

export default function OpenProjectModalButton({
  onClick,
  label = "Ver detalles del proyecto",
  icon = <FaRegEye size={"20px"} />,
}) {
  return (
    <button
      onClick={onClick}
      className="
        px-4 py-2 w-full rounded shadow-lg
        font-bold bg-blue-600 text-white text-sm cursor-pointer
        transition-all duration-300
        hover:bg-blue-400 hover:text-blue-900 hover:scale-105
        hover:shadow-xl
        flex items-center gap-2 justify-center
      "
      type="button"
      aria-label={label}
    >
      {icon}
      {label}
    </button>
  );
}