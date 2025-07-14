import { socialLinkList } from "../../data/social-link-list";

export default function SocialIconLink({ platformKey, displayName = false }) {
  const platform = socialLinkList.find(
    (platform) => platform.key === platformKey
  );

  if (!platform) return null;

  const Icon = platform.icon;

  return (
    <a
      href={platform.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={platform.label}
      title={platform.label}
      className={`
        inline-flex items-center gap-2
        transition duration-300 bg-white
        ${displayName && "border px-3 py-0.5 rounded-full shadow-sm text-sm hover:shadow-xl hover:text-blue-600 hover:bg-blue-50/50 hover:scale-110"}
      `}
    >
      {displayName && <span>{platform.name}</span>}
      <Icon
        className={`
          w-6 h-6 fill-current 
          transition duration-300
          ${!displayName && "hover:text-blue-600 hover:scale-110 hover:bg-blue-50/50"}
        `}
      />
    </a>
  );
}
