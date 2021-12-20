import { BsFillCircleFill } from 'react-icons/bs'

export function CardRoadmap({ subheading, heading, list }) {
  return (
    <div className="custom-card d-flex align-items-center">
      <div>
        <div className="subheading">{subheading}</div>
        <h1>{heading}</h1>
        <ul className="list-unstyled">{list.map((item, key) => (
          <li key={key}>
            <BsFillCircleFill size={10} color={ item.completed ? '#4ade80' : '#f1f5f9' } className='align-middle' />
            <span className='ms-2 align-middle'>{item.item}</span>
          </li>
        ))}</ul>
      </div>
    </div>
  )
}