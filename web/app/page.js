'use client'

import Image from 'next/image'
import Since from './components/since';
import Allergen from './components/allergen';
import { useEffect } from 'react';

let allergens = [
  'Milk',
  'Eggs',
  'Nuts',
  'Fish',
  'Wheat',
  'Soy',
  'Sesame'
]


export default function Home() {

  return (
    <main>
      {allergens.map((gen) => {
        return (
          <Allergen props={{title: gen}} key={gen} />
        )
      })}
    </main>
  )
}