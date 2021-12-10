import { Socials } from "../Socials";

export function CardDefault({ subheading, heading, description, socials, development }) {
  return (
    <div className="custom-card d-flex align-items-center">
      <div>
        <div className="subheading">{subheading}</div>
        <h1>{heading}</h1>
        <p className="description">{description}</p>
        { socials ? <Socials /> : <></> }
        { development ? <p>Website under development.</p> : <></> }
      </div>
    </div>
  )
}