import React, { createContext } from 'react'
import { useState } from 'react'

export const api = createContext()


const Context = (props) => {
    
    const [theme, setTheme] = useState('light')
  return (
    <div>

        <api.Provider value={ [theme, setTheme]}>{props.children}</api.Provider>     
    </div>
  )
}

export default Context
