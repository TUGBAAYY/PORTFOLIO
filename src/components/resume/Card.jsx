import React from 'react'

const Card = (props) => {
  return (
    <div className="timeline__item">
        <i className={props.icon}></i>
        <span className="timline__date">{props.year}</span>
        <h3 className="timline__title">{props.title}</h3>
        <p className="timline__text">{props.desc}</p>
    </div>
  )
}

export default Card