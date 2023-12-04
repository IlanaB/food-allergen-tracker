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
]

export default function Home() {
  const [allergens, setAllergens] = useState(allergenNames.map(allergenTimeMapCallback));

  function allergenTimeMapCallback(name, ind) {
    return {name, time: ind}
  }

  useEffect(() => {
    setAllergens(a => a.sort(allergenTimeSortCallback))
  }, []);

  function allergenTimeSortCallback(a, b) {
    if(a.time > b.time) {
      return 1
    }
    if(a.time < b.time) {
      return -1
    }
    return 0
  }

  return (
    <main>
      <div className="flex flex-col items-center w-[100vw] h-[100vh]">
        <h1 className=" text-6xl animate-pulse font-bold pb-10">Food Allergen Tracker</h1>
        <div>
          {allergens.map(allergen => <Allergen key={allergen.name} props={{name: allergen.name, time: allergen.time}}/>)}
        </div>
      </div>
    </main>
  )
}
