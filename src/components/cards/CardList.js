import SanitizedHTML from 'react-sanitized-html';
import { Contract } from '../Contract'

export function CardList({ subheading, heading, list, contract }) {
  return (
    <div className="custom-card d-flex align-items-center">
      <div>
        <div className="subheading">{subheading}</div>
        <h1>{heading}</h1>
        <ul className="list-unstyled">{list.map((item, key) => <li key={key}><SanitizedHTML html={item} /></li>)}</ul>
        { contract ? <Contract /> : <></> }
      </div>
    </div>
  )
}