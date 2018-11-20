import React from 'react'

const Button = ({ label, alertText }) => (
  <div>
    <button
      onClick = {() => alert (alertText)}
    >
    {label}
    </button>
  </div>
)

export default Button