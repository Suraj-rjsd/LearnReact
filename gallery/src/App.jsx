import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './component/Card'
import Button from './component/Button'
const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)
  const click = async () => {
    const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(res.data);
  }

  useEffect(function () {
    click()
  }, [index])

  let printdata = <h3 className='font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if (userData.length > 0) {
    printdata = userData.map((elem, idx) => {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      )
    })
  }
  return (
    <>
      <div className='bg-black min-h-screen text-white p-5'>

        <div className='w-full h-full flex flex-wrap justify-center items-center gap-10'>
          {printdata}
        </div>
        
        <Button index={index} setIndex={setIndex} setUserData={setUserData} />

      </div>
    </>
  )
}

export default App
