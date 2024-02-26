"use client";
import { useEffect, useState } from "react";
import Since from "./components/since";

let allergenNames = ["Milk", "Eggs", "Nuts", "Fish", "Wheat", "Soy", "Sesame"];

export default function Home() {
  const [allergens, setAllergens] = useState(loadAllergensOrDefault());

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
                <p
                  className="font-bold text-lg"
                  suppressHydrationWarning={true}
                >
                  {name}
                </p>
                <Since lastEaten={time} />
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
  if (typeof window !== "undefined") {
    const storedTimes = JSON.parse(window.localStorage.getItem(key));
    if (storedTimes === null) {
      console.log("LoadJSON reading null");
      return null;
    }
    return storedTimes.map(({ name, time }) => {
      return { name, time: time ? new Date(time) : null };
    });
  }
}

function storeJSONinLocal(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function loadAllergensOrDefault() {
  const allergens = loadJSONfromLocal("allergens");
  return (
    allergens ||
    allergenNames.map((name) => {
      return { name, time: null };
    })
  );
}
