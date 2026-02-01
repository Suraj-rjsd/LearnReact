import React from 'react'
import Card from './Card'

const RightText = (props) => {
  return (
    <div className='w-2/3 flex flex-nowrap h-full gap-10 overflow-x-auto p-6'>
       {props.user.map(function (elem ,idx) {
        return(
          <Card key={idx} id={idx} img={elem.img} tag={elem.tag} />
        )
       })}
    </div>
  )
}

export default RightText
