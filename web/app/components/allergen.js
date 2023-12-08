import React from 'react'

export default function Allergen({props, children}) {
  const {name, time} = props;
  return (
    <div>
      <p className='font-bold text-lg'>{name}</p>
      <p>{time}</p>
    </div>
  )
}