import { FaGithub, FaLink } from "react-icons/fa";

export default function ExternalLinkButton({ url, label, destination = "default"}) {
      const buttonStyleList = [
        {destination: "default", iconElement: <FaLink />, styleClasses: "text-white bg-blue-700"}, 
        {destination: "github", iconElement: <FaGithub />, styleClasses: "hover:text-white"}
      ]
      const buttonStyle = buttonStyleList.find((buttonStyleInfo) => buttonStyleInfo.destination === destination) || buttonStyleList[0];

      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            flex gap-1 items-center
            text-sm rounded p-1 min-w-15
            border border-black/20
            transition duration-300
            hover:bg-blue-400
            ${buttonStyle.styleClasses}
          `}
        >
          {buttonStyle.iconElement} {label}
        </a>
      );
}