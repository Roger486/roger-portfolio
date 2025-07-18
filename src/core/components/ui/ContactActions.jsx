import { socialLinkList } from "../../data/social-link-list";
import ContactButton from "./ContactButton";
import SocialIconLink from "./SocialIconLink";

export default function ContactActions({ buttonClassName = "flex" }) {
  const socialIconsLinks = socialLinkList.map((socialLink) => (
    <SocialIconLink key={socialLink.key} platformKey={socialLink.key} />
  ));

  return (
    <section className="flex items-center gap-3">
      <ContactButton buttonClassName={buttonClassName} />
      <div className="flex gap-2">{socialIconsLinks}</div>
    </section>
  );
}
