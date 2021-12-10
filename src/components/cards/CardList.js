export function CardList({ subheading, heading, list }) {
  return (
    <div className="custom-card d-flex align-items-center">
      <div>
        <div className="subheading">{subheading}</div>
        <h1>{heading}</h1>
        <ul className="list-unstyled">{list.map((item, key) => <li key={key}>{item}</li>)}</ul>
      </div>
    </div>
  )
}