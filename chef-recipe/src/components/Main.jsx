import React from "react";
import { FaPlus } from "react-icons/fa6";

function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [value, setValue] = React.useState("");
  const addIngredient = (e) => {
    e.preventDefault();
    if (!value) return;
    setIngredients([...ingredients, value]);
    setValue("");
  };
  return (
    <main>
      <form className="flex items-center justify-center p-4">
        <input
          aria-label="Add ingredient"
          type="text"
          name="ingredient"
          id="ingredient"
          placeholder="e.g. chicken"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className="text-black p-1 m-1 border border-gray-400 rounded-l-md min-w-1 flex-grow-1"
        />
        <button
          onClick={(e) => addIngredient(e)}
          className="p-1 flex items-center bg-black text-white rounded"
        >
          <FaPlus className="mr-1" />
          Add Ingredient
        </button>
      </form>
      {ingredients.length > 0 && (
        <>
          <section className="flex flex-col items-center">
            <h2>Ingredients on hand: </h2>
            <ul className="flex flex-col">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="p-1 m-1 text-black rounded">
                  {ingredient}
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </main>
  );
}

export default Main;
