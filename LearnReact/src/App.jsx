import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

const click = () => {

  setNum(num + 1)
}

  useEffect(() => {
   console.log("useEffect");
    
  }, [num])
  
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={click}>click me</button>
    </div>
  )
}

export default App
