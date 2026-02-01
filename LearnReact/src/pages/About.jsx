import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
    <div>
      <h1>About</h1>
<Link to='/about/pui'>Pui</Link>
    </div>
    <Outlet />
    </div>
  )
}

export default About
