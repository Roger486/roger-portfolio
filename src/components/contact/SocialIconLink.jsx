import { socialLinkList } from "../../data/social-link-list";

export default function SocialIconLink({ platformKey }) {
  const platform = socialLinkList.find(platform => platform.key === platformKey);

  if (!platform) return null;

  const Icon = platform.icon;

  return (
    <a
      href={platform.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={platform.label}
    >
      <Icon 
        className="
          w-6 h-6 fill-current 
          transition duration-300
          hover:text-blue-600 hover:scale-110 hover:bg-blue-50/50
        "
      />
    </a>
  );
}
