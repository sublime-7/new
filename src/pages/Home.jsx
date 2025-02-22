import { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import RecipeForm from "../components/RecipeForm";

const Home = () => {
  const [recipes, setRecipes] = useState([
    {
      id: "1",
      title: "Spaghetti Carbonara",
      description: "A delicious Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Pancetta", "Black Pepper"],
    },
    {
      id: "2",
      title: "Chocolate Cake",
      description: "A rich and moist chocolate cake perfect for dessert lovers.",
      image: "https://images.pexels.com/photos/3740197/pexels-photo-3740197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      ingredients: ["Flour", "Cocoa Powder", "Sugar", "Eggs", "Butter", "Baking Powder"],
    },
  ]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, { ...newRecipe, id: (recipes.length + 1).toString() }]);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Explore Recipes</h2>
      <RecipeForm onSubmit={addRecipe} />
      <div className="row mt-4">
        {recipes.map(recipe => (
          <div className="col-md-4 mb-4" key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
