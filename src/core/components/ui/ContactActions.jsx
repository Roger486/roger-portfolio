import { socialLinkList } from "../../data/social-link-list";
import ContactButton from "./ContactButton";
import SocialIconLink from "./SocialIconLink";

export default function ContactActions({ hideButtonOnMobile = false }) {
  const socialIconsLinks = socialLinkList.map((socialLink) => (
    <SocialIconLink key={socialLink.key} platformKey={socialLink.key} />
  ));

  return (
    <section className="flex items-center gap-3">
      <div className={ hideButtonOnMobile ? "hidden sm:flex" : "flex"}>
        <ContactButton />
      </div>
      <div className="flex gap-2">{socialIconsLinks}</div>
    </section>
  );
}
