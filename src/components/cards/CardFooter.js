export function CardFooter({ heading, description }) {
  return (
    <div className="">
      <div>
        <h2>{heading}</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  )
}