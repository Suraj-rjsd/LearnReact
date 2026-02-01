import React from 'react'

const CardContent = (props) => {
  return (
    <div>
       <div className='absolute h-full w-full top-0 left-0 p-10 flex flex-col justify-between'>
                <h2 className='bg-white h-10 w-10 rounded-full items-center flex justify-center '>{props.id+1}</h2>
                <div>
                    <p className='text-lg text-white mb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse architecto sit, alias provident expedita vel!</p>
                    <div className='flex justify-between'>
                        <button className='bg-violet-800 text-white px-7 py-3 rounded-full'>{props.tag}</button>
                        <button className='bg-violet-800 text-white px-5 py-2 rounded-full'> <i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CardContent
