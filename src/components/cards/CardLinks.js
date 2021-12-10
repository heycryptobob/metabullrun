import { Socials } from "../Socials";

export function CardLinks({ heading, list }) {
  return (
    <div className="">
      <div>
        <h2>{heading}</h2>
        <ul className="list-unstyled">{list.map((item, key) => (
          <li key={key}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}</ul>
        <Socials />
      </div>
    </div>
  )
}