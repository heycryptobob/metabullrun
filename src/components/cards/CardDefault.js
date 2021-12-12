import { Socials } from "../Socials";
import { Contract } from '../Contract';

export function CardDefault({ subheading, heading, description, socials, development, contract }) {
  return (
    <div className="custom-card d-flex align-items-center">
      <div>
        <div className="subheading">{subheading}</div>
        <h1>{heading}</h1>
        <p className="description">{description}</p>
        { socials ? <Socials /> : <></> }
        { development ? <p>Website under development.</p> : <></> }
        { contract ? <Contract /> : <></>}
      </div>
    </div>
  )
}