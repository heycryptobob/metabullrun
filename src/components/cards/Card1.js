import { Socials } from "../Socials";

export function Card1({ subheading, heading, description, socials }) {
  return (
    <div className="custom-card d-flex align-items-center">
      <div>
        <div className="subheading">{subheading}</div>
        <h1>{heading}</h1>
        <p className="description">{description}</p>
        { socials ? <Socials /> : <></> }
        <p>Website under development.</p>
      </div>
    </div>
  )
}