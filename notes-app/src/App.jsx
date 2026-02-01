import React, { useState } from 'react'

const App = () => {

  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")

  const [task, setTask] = useState([])

  const handleInput1 = (e) => {
    setInput1(e.target.value)
  }
  const handleInput2 = (e) => {
    setInput2(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const data = [...task]
    data.push({ input1, input2 })

    setTask(data)

    setInput1("")
    setInput2("")
  }
  const deleteTask = (idx) => {
    const data = [...task]
    data.splice(idx,1)
    setTask(data)
  }
  return (
    <div className='min-h-screen  bg-black text-white'>
      <h1 className='text-3xl text-center p-2'>Add Notes</h1>
      <form onSubmit={submitHandler} className='flex flex-col lg:justify-between lg:flex-row gap-8 p-6 lg:p-10 items-center lg:items-start'>

        <div className='flex w-full lg:w-1/2 flex-col gap-5 '>
          <input onChange={handleInput1} value={input1} className='px-5 py-2 border-2 rounded' type="text" placeholder='Enter Title ' />
          <textarea onChange={handleInput2} value={input2} className='px-5 h-32 py-2 border-2 rounded resize-none' type="text" placeholder='Enter Details' />
          <button className='bg-cyan-500 active:bg-emerald-200 rounded px-5 py-2  '>Add Notes</button>
        </div>
        <img className='h-70 w-70 mr-15 lg:max-w-md object-contain rotate-y-180' src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small_2x/a-black-and-white-drawing-of-a-man-writing-png.png" alt="" />

      </form>

      <h1 className='text-3xl text-center mt-6'>Your Notes</h1>
      <div className='flex flex-wrap justify-center gap-6 p-6'>

        {task.map((elem, idx) => {
          return (
            <div key={idx} className="data relative text-black bg-cover bg-[url('https://simg.nicepng.com/png/small/93-938738_note-paper-png-download-handwriting.png')] 
            h-48 w-48 rounded-3xl p-4 m-10 ">

              <button onClick={() => {
                deleteTask(idx)
              }} className='cursor-pointer  active:bg-amber-500 absolute font-bold h-7 w-7  top-1 right-1 text-center bg-red-600 rounded-full text-sm'>X</button>
              <h3 className='mt-2 leading-tight font-bold text-xl break-words'>{elem.input1}</h3>
              <p className='mt-3 font-s leading-tight text-gray-700 break-words'>{elem.input2}</p>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default App
