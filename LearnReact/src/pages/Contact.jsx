
import { useNavigate } from 'react-router-dom'

const Contact = () => {

    const navigate = useNavigate()
    
  return (
    <div>
      <h1>Contact</h1>
      <button onClick={()=>{
        navigate('/')
      }} className='bg-blue-600 h-10 w-20 p-1 rounded-full  m-5'> Return </button>
      <button onClick={()=>{
        navigate(-1 )
      }} className='bg-blue-600 h-10 w-20 p-1 rounded-full  m-5'> Back </button>
    </div>
  )
}

export default Contact
