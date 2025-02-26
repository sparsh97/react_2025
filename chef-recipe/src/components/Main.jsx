import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa6";

function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [isShown, setIsShown] = React.useState(false);
  const [value, setValue] = React.useState("");

  const addIngredient = (e) => {
    e.preventDefault();
    if (!value.trim()) return; // Prevent empty input
    setIngredients([...ingredients, value]);
    setValue("");
  };

  const removeIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  function getRecipe() {
    setIsShown(true);
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* Input & Add Button */}
      <form className="flex items-center w-full max-w-md">
        <input
          aria-label="Add ingredient"
          type="text"
          name="ingredient"
          id="ingredient"
          placeholder="e.g. chicken"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="flex-grow p-2 border border-gray-400 rounded-l-md focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={addIngredient}
          className="p-2 bg-black hover:bg-gray-800 text-white rounded-r-md transition-colors duration-200 flex items-center"
        >
          <FaPlus className="mr-1" />
          Add
        </button>
      </form>

      {ingredients.length > 0 && (
        <>
          {/* Ingredients List */}
          <section className="mt-6 w-full max-w-md text-center">
            <h2 className="text-xl font-semibold mb-4">Ingredients on hand:</h2>
            <ul className="w-full">
              {ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-2 border border-gray-300 rounded shadow-sm hover:shadow-md transition-shadow duration-200 mb-2"
                >
                  <span className="flex-grow text-left">{ingredient}</span>
                  <button
                    onClick={() => removeIngredient(index)}
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* Recipe Button */}
          {ingredients.length > 3 && (
            <div className="mt-4 w-full max-w-md p-3 bg-gray-100 border border-gray-300 rounded shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Ready for a recipe?</h3>
              <p className="mb-2">Generate a recipe from your list of ingredients.</p>
              <button
                onClick={getRecipe}
                className="bg-black hover:bg-gray-800 text-white rounded p-2 transition-colors duration-200"
              >
                Get a Recipe
              </button>
            </div>
          )}

          {/* Recipe Display */}
          {isShown && (
            <section className="mt-6 w-full max-w-md text-center">
              <h2 className="text-xl font-semibold mb-4">Chef Claude Recommends:</h2>
              <article className="p-4 border border-gray-300 rounded shadow-md">
                <p>
                  Based on the ingredients you have available, I recommend making a
                  delicious <strong>Beef Bolognese Pasta</strong>. Here’s how:
                </p>
                <h3 className="mt-2 font-semibold">Ingredients:</h3>
                <ul className="list-disc list-inside text-left">
                  <li>1 lb. ground beef</li>
                  <li>1 onion, diced</li>
                  <li>3 cloves garlic, minced</li>
                  <li>2 tablespoons tomato paste</li>
                  <li>1 (28 oz) can crushed tomatoes</li>
                  <li>1 cup beef broth</li>
                  <li>1 teaspoon dried oregano</li>
                  <li>1 teaspoon dried basil</li>
                  <li>Salt and pepper to taste</li>
                  <li>8 oz pasta of your choice</li>
                </ul>
                <h3 className="mt-2 font-semibold">Instructions:</h3>
                <ol className="list-decimal list-inside text-left">
                  <li>Cook the ground beef in a skillet until browned.</li>
                  <li>Add diced onion and minced garlic, sauté for 2-3 minutes.</li>
                  <li>Mix in tomato paste, cook for 1 minute.</li>
                  <li>Add crushed tomatoes, beef broth, oregano, basil, salt & pepper.</li>
                  <li>Simmer for 15-20 minutes.</li>
                  <li>Cook pasta according to package instructions.</li>
                  <li>Combine sauce with pasta and serve hot.</li>
                </ol>
              </article>
            </section>
          )}
        </>
      )}
    </main>
  );
}

export default Main;
