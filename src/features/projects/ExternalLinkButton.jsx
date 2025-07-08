import { FaGithub, FaLink } from "react-icons/fa";

export default function ExternalLinkButton({ url, label, destination = "default"}) {
      const iconList = [
        {destination: "default", iconElement: <FaLink />, styleClasses: "text-white bg-blue-700"}, 
        {destination: "github", iconElement: <FaGithub />, styleClasses: "hover:text-white"}
      ]
      const iconStyle = iconList.find((iconInfo) => iconInfo.destination === destination) || iconList[0];

      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            flex gap-1 items-center
            text-sm rounded px-3 py-1 min-w-15
            border border-black/20
            transition duration-300
            hover:bg-blue-400
            ${iconStyle.styleClasses}
          `}
        >
          {iconStyle.iconElement} {label}
        </a>
      );
}