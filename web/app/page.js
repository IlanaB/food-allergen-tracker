"use client";
import { useState } from "react";
import Since from "./components/since";
import Resetter from "./components/resetter";

let allergenNames = [
  { name: "Milk", time: new Date() },
  { name: "Eggs", time: new Date() },
  { name: "Nuts", time: new Date() },
  { name: "Fish", time: new Date() },
  { name: "Wheat", time: new Date() },
  { name: "Soy", time: new Date() },
  { name: "Sesame", time: new Date() },
];

export default function Home() {
  const [allergens, setAllergens] = useState(
    allergenNames.sort(allergenTimeSortCallback)
  );

  function updateTime(targetAllergen) {
    setAllergens(
      allergens.map((allergen) => {
        if (allergen.name === targetAllergen) {
          return { name: targetAllergen, time: new Date() };
        } else {
          return allergen;
        }
      })
    );
  }

  return (
    <main>
      <div className="flex flex-col items-center w-[100vw] h-[100vh]">
        <h1 className=" text-6xl animate-pulse font-bold pb-10">
          Food Allergen Tracker
        </h1>
        <ul>
          {allergens.map(({ name, time }) => {
            return (
              <li key={name}>
                <p className="font-bold text-lg">{name}</p>
                <Since props={time} />
                <Resetter
                  props={{
                    updater: updateTime,
                    name,
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

function allergenTimeSortCallback(a, b) {
  return b.time - a.time;
}
