import React from 'react'
import { FaBeer } from "react-icons/fa";

const IconComponent = () => {
  return (
    <div
      style={{
        fontSize: '30px',
        color: 'gold'
      }}
    >
      <FaBeer size={25}/>
      <h1>Icon Component</h1>
      <p>This is an icon component example made using react-icons library</p>
    </div>
  )
}

export default IconComponent