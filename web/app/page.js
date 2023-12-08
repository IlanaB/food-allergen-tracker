'use client'
import { useEffect, useState, useLayoutEffect } from 'react';
import Allergen from './components/allergen'

let allergenNames = [
  {name: 'Milk', time: 1},
  {name: 'Eggs', time: 33},
  {name: 'Nuts', time: 5},
  {name: 'Fish', time: 67},
  {name: 'Wheat', time: 34},
  {name: 'Soy', time: 35},
  {name: 'Sesame', time: 3},
]

export default function Home() {
  const [allergens, setAllergens] = useState(allergenNames.sort(allergenTimeSortCallback));

  return (
    <main>
      <div className="flex flex-col items-center w-[100vw] h-[100vh]">
        <h1 className=" text-6xl animate-pulse font-bold pb-10">Food Allergen Tracker</h1>
        <ul>
          {allergens.map(({name, time}) => {
            return (
            <li key={name}>

              <Allergen
                props={ {name, time} }/>

            </li>
          )})}
        </ul>
      </div>
    </main>
  )
}

function allergenTimeSortCallback(a, b) {
  return a.time - b.time
}
