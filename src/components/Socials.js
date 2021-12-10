import { SocialIcon } from "react-social-icons";

export function Socials() {
  return (
    <div className="my-3">
      <SocialIcon
        url="https://t.me/metabullrun"
        network="telegram"
        bgColor="#FFFFFF"
        style={{ height: "32px", width: "32px" }}
        target="_blank"
        rel="noreferrer"
      />
      <SocialIcon
        url="https://twitter.com/metabullrun"
        bgColor="#FFFFFF"
        style={{ height: "32px", width: "32px" }}
        className="ms-2"
        target="_blank"
        rel="noreferrer"
      />
      <SocialIcon
        url="https://www.instagram.com/metabullrun"
        bgColor="#FFFFFF"
        style={{ height: "32px", width: "32px" }}
        className="ms-2"
        target="_blank"
        rel="noreferrer"
      />
    </div>
  );
}
