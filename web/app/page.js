"use client";
import { useEffect, useState } from "react";
import Since from "./components/since";

let allergenNames = [
  { name: "Milk" },
  { name: "Eggs" },
  { name: "Nuts" },
  { name: "Fish" },
  { name: "Wheat" },
  { name: "Soy" },
  { name: "Sesame" },
];

export default function Home() {
  const [allergens, setAllergens] = useState(
    stateSetter()
  );

  useEffect(() => {
    storeJSONinLocal("allergens", allergens);
  }, [allergens]);

  function updateTime(targetAllergen) {
    const time = new Date();
    setAllergens(
      allergens.map((allergen) => {
        if (allergen.name === targetAllergen) {
          return { name: targetAllergen, time };
        } else {
          return allergen;
        }
      })
    );
    setAllergens(a => a.sort(allergenTimeSortCallback));
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

function loadJSONfromLocal(key) {
  const storedTimes = JSON.parse(window.localStorage.getItem(key));
  if (storedTimes === null) {
    console.log("LoadJSON reading null");
    return null;
  }
  return storedTimes.map(({ name, time }) => {
    if (time) {
      return { name, time: new Date(time) };
    }
    return { name, time };
  });
}

function storeJSONinLocal(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function stateSetter() {
  const allergens = loadJSONfromLocal("allergens");
  if(allergens) {
    return allergens
  }
  return allergenNames.map(({name}) => {
    return {name, time: null}
  })
}
