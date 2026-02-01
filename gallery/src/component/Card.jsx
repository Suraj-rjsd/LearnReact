import React from 'react'

    const Card = ({elem}) => {
  return (
    <div>
       <a href={elem.url} target='_blank'>
            <div className='h-64 overflow-hidden  w-64 '>
              <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
            </div>
            <h1>{elem.author}</h1>
          </a>
    </div>
  )
}

export default Card
