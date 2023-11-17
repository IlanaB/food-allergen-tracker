'use client'

import Image from 'next/image'
import Since from './components/since';
import Allergen from './components/allergen';
import { useEffect, useState } from 'react';

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
  const [allergens, setAllergens] = useState(allergenNames);

  useEffect(() => {
    sortAllergens()
  }, [])

  function sortAllergens() {
    const bound = bindAllergensToDates();
    bound.sort(sortCallback);
    const sortedTitles = bound.map(val => val.allergen)
    setAllergens(sortedTitles)
  }

  function bindAllergensToDates() {
    return (allergenNames.map(allergen => {
      const stored = window.localStorage.getItem(allergen)
      if(stored === null) {
        return {allergen, date: null}
      }
      const date = new Date(stored);
      return {allergen, date};
    }));
  };

  function sortCallback(a, b) {
    if( a.date === null) {
      return 1
    }
    if( b.date === null) {
      return -1
    }
    return (a.date.valueOf() - b.date.valueOf())
  }

  return (
    <main>
      {allergens.map((gen) => {
        return (
          <Allergen props={{title: gen, sorter: sortAllergens}} key={gen} />
        )
      })}
    </main>
  )
}