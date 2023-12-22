"use client";
import { useEffect, useState } from "react";
import Since from "./components/since";

let allergenNames = [
  { name: "Milk", time: null },
  { name: "Eggs", time: null },
  { name: "Nuts", time: null },
  { name: "Fish", time: null },
  { name: "Wheat", time: null },
  { name: "Soy", time: null },
  { name: "Sesame", time: null },
];

export default function Home() {
  const [allergens, setAllergens] = useState(
    allergenNames.sort(allergenTimeSortCallback)
  );

  useEffect(() => {
    const newTimes = loadTimesFromLocalStorage();
    setAllergens(newTimes.sort(allergenTimeSortCallback));
  }, []);

  function updateTime(targetAllergen) {
    setAllergens(
      allergens.map((allergen) => {
        if (allergen.name === targetAllergen) {
          const time = new Date();
          window.localStorage.setItem(allergen.name, time);
          return { name: targetAllergen, time };

        } else {
          return allergen;
        }
      })
    );
    setAllergens((a) => a.sort(allergenTimeSortCallback));
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
                <button
                  onClick={() => {
                    updateTime(name);
                  }}
                >
                  Fed
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

function allergenTimeSortCallback(a, b) {
  if (a.time && b.time) {
    return a.time - b.time;
  }
  if (!a.time) {
    return 1;
  } else {
    return -1;
  }
}

function loadTimesFromLocalStorage() {
  const newTimes = allergenNames.map(({ name }) => {
    const storedTime = window.localStorage.getItem(name);
    const time = storedTime ? new Date(storedTime) : null;
    return { name, time };
  });
  return newTimes;
}
