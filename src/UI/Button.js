import React from 'react'
import classes from './Button.module.css'

function Button(props) {
  return (
    <button type={props.type} className={classes.button} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
