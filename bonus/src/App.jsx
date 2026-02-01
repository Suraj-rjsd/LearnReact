
import Nav from './components/Nav'
import { useContext } from 'react'
import { api } from './context/Context'

const App = () => {

     const [theme, setTheme] =useContext(api)
     console.log([theme, setTheme]);
     

  
  return (  
    <div>
      <h1>the Theme is {theme} </h1>
       <Nav theme={theme} setTheme={setTheme} />
    </div>
   
  )
}

export default App
