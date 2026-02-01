import { useState } from 'react'
const App = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")

  const [data, setData] = useState([])

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleAge = (e) => {
    setAge(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(name, age);
    setData(prev=>[...prev, {name, age}])
    setAge("")
    setName("")
  }



  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <div className="form  gap-4 mt-7 p-5 ">
        <form onSubmit={submitHandler} className='max-w-xl mx-auto bg-white border border-slate-200 shadow-sm rounded-lg p-6 flex gap-4' >
          <input onChange={handleName} className='border-2' type="text" placeholder='Name' required value={name} />
          <input onChange={handleAge} className='border-2' type="number" placeholder='Age' required value={age} />
          <button className='bg-slate-700 text-white px-5 py-2 rounded-md hover:bg-slate-800 transition'>Submit</button>
        </form>
      </div>


      <div className="max-w-xl mx-auto mt-8 flex flex-col gap-3">
        {data.map((item, idx,) => {
          return(
          <div key={idx} className='bg-white border border-slate-200 rounded-lg p-4 flex justify-between text-slate-700 shadow-sm'>
            <h1>Id: {idx+1} </h1>
            <h1>Name: {item.name}</h1>
            <h1>Age: {item.age}</h1>
          </div>)
        })}
      </div>
    </div>
  )
}

export default App
