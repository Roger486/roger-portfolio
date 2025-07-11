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
 * @param {"default" | "github"} [props.destination="default"] - The type of destination. This changes the button's style and icon.
 *
 * @returns {JSX.Element} A styled external link button.
 */
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