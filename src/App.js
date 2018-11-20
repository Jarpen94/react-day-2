import React from 'react'

import Button from './Button'

const names = ['Ala', 'Ola', 'Ela']
const namesList = names.map(name => <li key={name}>{name}</li>)


const App = (props) => (
  <div>
    <div>
      {names}
    </div>
    <ul>
      {namesList}
    </ul>
    <Button 
      label="Kliknij mnie!"
      alertText = "Kliknąłeś"
    />
    <Button 
      label="Click me!"
      alertText = 'Clicked'
    />
  </div>
)

export default App