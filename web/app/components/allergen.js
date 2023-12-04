import React from 'react'

export default function Allergen({props, children}) {
  const {name, time} = props;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{time}</h2>
    </div>
  )
}