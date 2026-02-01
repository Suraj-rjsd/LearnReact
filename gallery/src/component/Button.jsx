import React from 'react'

const Button = ( {index, setIndex, setUserData}) => {
  return (
    <div className='w-full h-full flex flex-wrap justify-center items-center gap-10 mt-10 '>
       <button style={{opacity: index > 1 ? 1 : 0.5}} onClick={() => {
            if (index > 1) {

              setIndex(index - 1)
              setUserData([])
            }
          }} className='bg-amber-200 active:scale-90 rounded-xl h-13 w-20 text-black p-2 mb-3'>Prev</button>

          <h4>Page {index}</h4>

          <button onClick={() => {
            setUserData([])
            setIndex(index + 1)
  
          }} className='bg-amber-200 active:scale-90 rounded-xl h-13 w-20 text-black  p-2 mb-3'>Next</button>
    </div>
  )
}

export default Button
