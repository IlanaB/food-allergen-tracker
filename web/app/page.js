'use client'
import { useEffect, useState } from 'react';
import Allergen from './components/allergen'

let allergenNames = [
  'Milk',
  'Eggs',
  'Nuts',
  'Fish',
  'Wheat',
  'Soy',
  'Sesame'
].map((name, time) => {name, time});

export default function Home() {
  const [allergens, setAllergens] = useState(allergenNames.map(allergenTimeMapCallback));

  useEffect(() => {
    setAllergens(a => a.sort(allergenTimeSortCallback))
  }, []);

  return (
    <main>
      <div className="flex flex-col items-center w-[100vw] h-[100vh]">
        <h1 className=" text-6xl animate-pulse font-bold pb-10">Food Allergen Tracker</h1>
        <ul>
          {allergens.map(({name, time}) => {
            <li>

              <Allergen
                key={name}
                props={ {name, time} }/>

            </li>
          })}
        </ul>
      </div>
    </main>
  )
}

function allergenTimeSortCallback(a, b) {
  return a.time - b.time
}
