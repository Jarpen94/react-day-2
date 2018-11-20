import React from 'react'

const Button = (props) => (
  <div>
    <button
      onClick = {props.onClickHandler}
    >
    {props.label}
    </button>
  </div>
)

export default Button