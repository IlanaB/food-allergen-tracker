'use client'
import { useEffect, useState, useLayoutEffect } from 'react';
import Allergen from './components/allergen'
import Since from './components/since'
import Resetter from './components/resetter'

let allergenNames = [
  {name: 'Milk', time: new Date()},
  {name: 'Eggs', time: new Date()},
  {name: 'Nuts', time: new Date()},
  {name: 'Fish', time: new Date()},
  {name: 'Wheat', time: new Date()},
  {name: 'Soy', time: new Date()},
  {name: 'Sesame', time: new Date()},
]

export default function Home() {
  const [allergens, setAllergens] = useState(allergenNames.sort(allergenTimeSortCallback));

  function updateTime(allergen) {
    setAllergens(allergens.map(gen => {
      if(gen.name === allergen) {
        return {name: allergen, time: new Date()}
      } else {
        return gen
      }
    }))
  }

  return (
    <main>
      <div className="flex flex-col items-center w-[100vw] h-[100vh]">
        <h1 className=" text-6xl animate-pulse font-bold pb-10">Food Allergen Tracker</h1>
        <ul>
          {allergens.map(({name, time}) => {
            return (
            <li key={name}>

              <Allergen
                props={ {name} }>
                  <Since props={time} />
                  <Resetter props={{
                    updater: updateTime,
                    name,

                  }}/>
              </Allergen>
            </li>
          )})}
        </ul>
      </div>
    </main>
  )
}

function allergenTimeSortCallback(a, b) {
  return b.time - a.time
}


