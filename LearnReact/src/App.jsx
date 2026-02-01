import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Card from "./components/Card"
import Pui from "./pages/Pui"
import ContactDetail from "./pages/ContactDetail"


const App = () => {
  return (
    <div>
      <Card />
      <Routes > 
        <Route path="/" element={< Home />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="/contact/:id" element={< ContactDetail />} />
        <Route path="/about" element={< About />} >
          <Route path="pui" element={< Pui />} />
        </Route>

      
      </Routes>

    </div>
  )
}

export default App
