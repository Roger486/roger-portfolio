import { FaRegEye } from "react-icons/fa";

export default function OpenModalButton({
  onClick,
  label = "Ver detalles",
  icon = <FaRegEye />,
}) {
  return (
    <button
      onClick={onClick}
      className="
        mt-4 px-4 py-0.5 text-xs font-semibold
        bg-amber-600 text-white rounded shadow
        transition duration-300
        hover:bg-amber-500 hover:text-amber-900 hover:scale-110
        hover:shadow-xl
        flex items-center gap-2
      "
      type="button"
      aria-label={label}
    >
      {icon}
      {label}
    </button>
  );
}