import { socialLinkList } from "../../data/social-link-list";
import SocialIconLink from "../ui/SocialIconLink";

export default function Footer() {
  const socialIconsLinks = socialLinkList.map((socialLink) => (
    <SocialIconLink
      key={socialLink.key}
      platformKey={socialLink.key}
      displayName={true}
    />
  ));
  return (
    <footer className="bg-gray-700 py-12 mt-16 pr-25 lg:ml-64">
      <div className="text-white flex gap-4 justify-center mb-10 flex-wrap">{socialIconsLinks}</div>
      <p className="text-white text-center">
        © {new Date().getFullYear()} Roger Navarro. All rights reserved.
      </p>
    </footer>
  );
}
