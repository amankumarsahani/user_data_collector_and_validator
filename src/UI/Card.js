import React from 'react'
import Button from './Button'
import classes from './Card.module.css'

function Card(props) {
  return (
    <div className={`${props.className} ${classes.card}`}>
      {props.children}
    </div>
  )
}

export default Card
