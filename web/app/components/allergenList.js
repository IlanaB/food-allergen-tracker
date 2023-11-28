import React, { useState } from "react";
import Modal from "./modal";

export default function AllergenList({ props }) {
  const { allergens, setAllergens, closer } = props;
  const [newAllergens, setNewAllergens] = useState(allergens);
  const [newAllergen, setNewAllergen] = useState("");

  function closeAndUpdate() {
    closer(false);
    window.localStorage.setItem("userAllergens", newAllergens);
    setAllergens(newAllergens);
  }

  function removeFromList(item) {
    setNewAllergens(newAllergens.filter((allergen) => allergen !== item));
  }

  return (
    <Modal props={{ setter: setAllergens, closer: closeAndUpdate }}>
      <div className="grid grid-cols-2">
        {newAllergens.map((allergen) => {
          return (
            <div key={allergen} className="grid grid-cols-2 col-span-2">
              <p>{allergen}</p>
              <button className=" rounded bg-gray-200 mb-1 w-12 justify-self-center"
                onClick={() => {removeFromList(allergen)}}
              >-</button>
            </div>
          );
        })}

        <input
          type="text"
          value={newAllergen}
          onChange={(e) => setNewAllergen(e.target.value)}
          className="bg-gray-200 border-gray-400 border rounded"
        ></input>
        <button
          className="col-start-2"
          onClick={() => {
            if((newAllergen !== "") && typeof(newAllergen) === "string") {
              setNewAllergens([...newAllergens, newAllergen]);
            }
            setNewAllergen("");
          }}
        >
          add
        </button>
      </div>
    </Modal>
  );
}
