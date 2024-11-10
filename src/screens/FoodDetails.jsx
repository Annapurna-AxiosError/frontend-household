import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'iconsax-react'; // Import the back icon from IconSax
import dummyData from "../constants/dummyFood";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';  

export default function FoodDetails() {
  const { id } = useParams();
  const [recipies , setRecipies] = useState([]);
  const navigate = useNavigate();
  const foodItem = localStorage.getItem('filteredItems') ? JSON.parse(localStorage.getItem('filteredItems'))[id] : dummyData[id];
  useEffect(() => {
    async function fetchRecipie() {
      try {
        const response = await axios.post("https://resume-screening-2.onrender.com/recipie", { "food_item": foodItem.food_name, "quantity": foodItem.quantity.toString() });  
        localStorage.setItem("recipies", JSON.stringify(response.data.recipe));
        console.log(localStorage.getItem("recipies"));
        
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    }

    if (foodItem) {
      fetchRecipie();
    }
  }, [foodItem]);
  if (!foodItem) {
    return <div>Bread Rolls </div>;
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="flex items-center space-x-4 p-4 bg-white shadow-md">
        <button onClick={() => navigate(-1)} className="flex-shrink-0">
          <ArrowLeft size="24" color="#6B8E23" />
        </button>
        <h1 className="text-3xl font-bold text-[#6B8E23]">{foodItem.food_name}</h1>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="text-lg">
          <p className="font-dmSans">
            <span className="text-[#6B8E23]">Expiry Date: </span>
            <span className="text-black">{foodItem.expiry_date}</span>
          </p>
          <p className="font-dmSans">
            <span className="text-[#6B8E23]">Quantity: </span>
            <span className="text-black">{foodItem.quantity}</span>
          </p>
          <p className="font-dmSans">
            <span className="text-[#6B8E23]">Added by: </span>
            <span className="text-black">{foodItem.username}</span>
          </p>
          <p className="font-dmSans">
            <span className="text-[#6B8E23]">Description/Notes: </span>
            <span className="text-black">{foodItem.notes}</span>
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-[#6B8E23]">Recipes</h2>
          {foodItem.recipes && foodItem.recipes.length > 0 ? (
            recipies.map((recipe, index) => (
              <div key={index} className="mt-4 p-4 border rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#6B8E23]">{recipe.title}</h3>
                <p className="font-dmSans mb-2">{recipe.description}</p>
                <h4 className="text-lg font-bold text-[#6B8E23] mt-2">Ingredients:</h4>
                <ul className="list-disc list-inside mb-2">
                  {recipe.ingredients.map((ingredient, idx) => (
                    <li key={idx} className="font-dmSans">
                      {ingredient.ingredient_name}: {ingredient.quantity}
                    </li>
                  ))}
                </ul>
                <h4 className="text-lg font-bold text-[#6B8E23] mt-2">Steps:</h4>
                <ol className="list-decimal list-inside">
                  {recipe.steps.map((step, idx) => (
                    <li key={idx} className="font-dmSans mb-1">{step}</li>
                  ))}
                </ol>
              </div>
            ))
          ) : (
            <p className="font-dmSans">No recipes available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
