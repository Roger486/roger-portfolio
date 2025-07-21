import { BsYoutube } from "react-icons/bs";
import { FaGithub, FaLink } from "react-icons/fa";

/**
 * A styled button that links to an external URL.
 *
 * The button changes its style and icon based on the `destination` type.
 * It always opens the link in a new tab.
 *
 * @component
 * @param {Object} props
 * @param {string} props.url - The URL to open.
 * @param {string} props.label - The text to show inside the button.
 * @param {"default" | "github" | "youtube"} [props.destination="default"] - The type of destination. This changes the button's style and icon.
 *
 * @returns {JSX.Element} A styled external link button.
 */
export default function ExternalLinkButton({ url, label, destination = "default"}) {
      const buttonStyleList = [
        {destination: "default", iconElement: <FaLink size="20px" />, styleClasses: "text-white bg-blue-700 hover:bg-blue-400"}, 
        {destination: "youtube", iconElement: <BsYoutube size="25px" />, styleClasses: "text-white bg-red-600 hover:bg-red-200 hover:text-red-600"}, 
        {destination: "github", iconElement: <FaGithub size="25px" />, styleClasses: "text-gray-800 bg-white hover:bg-gray-800 hover:text-white"}
      ]
      const buttonStyle = buttonStyleList.find((buttonStyleInfo) => buttonStyleInfo.destination === destination) || buttonStyleList[0];

      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            flex gap-2 items-center
            text-sm rounded py-2 px-3
            min-w-[64px] min-h-[48px]
            border border-black/20
            transition duration-300
            ${buttonStyle.styleClasses}
          `}
        >
          {buttonStyle.iconElement} {label}
        </a>
      );
}