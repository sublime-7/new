import { useParams } from "react-router-dom";
import RecipeView from "../components/RecipeView";
import { useState, useEffect } from "react";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    
    const mockRecipes = [
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
          {
            id: "3",
            title: "Grilled Chicken",
            description: "Juicy grilled chicken marinated in herbs and spices, cooked to perfection.",
            image: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            ingredients: ["Chicken Breast", "Olive Oil", "Garlic", "Paprika", "Lemon Juice"],
          },
          {
            id: "4",
            title: "Avocado Toast",
            description: "A healthy and delicious avocado toast topped with cherry tomatoes and sesame seeds.",
            image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            ingredients: ["Bread", "Avocado", "Cherry Tomatoes", "Sesame Seeds", "Lemon Juice"],
          },
          {
            id: "5",
            title: "Vegetable Stir-Fry",
            description: "A vibrant and crunchy mix of stir-fried vegetables with a delicious soy-garlic sauce.",
            image: "https://images.pexels.com/photos/1282270/pexels-photo-1282270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce", "Garlic", "Ginger"],
          },
          {
            id: "6",
            title: "Berry Smoothie",
            description: "A refreshing and healthy berry smoothie packed with antioxidants.",
            image: "https://images.pexels.com/photos/5665643/pexels-photo-5665643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            ingredients: ["Strawberries", "Blueberries", "Banana", "Greek Yogurt", "Honey", "Almond Milk"],
          }
        
    ];

    const selectedRecipe = mockRecipes.find(recipe => recipe.id === id);
    setRecipe(selectedRecipe);
  }, [id]);

  return <RecipeView recipe={recipe} />;
};

export default RecipeDetail;
