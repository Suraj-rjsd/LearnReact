import React, { useContext } from 'react'
import { api } from '../context/Context'




const Nav = () => {
 const [theme, setTheme] =useContext(api)

     function click () {
        setTheme('dark')
    }
  return (
    <div>
      <button onClick={click}>Change theme</button>
    </div>
  )
}

export default Nav
