import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div>
      <div className="gh">

        
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Conatct</Link>
      </div>
    </div>
  )
}

export default Card
