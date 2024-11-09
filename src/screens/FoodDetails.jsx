import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'iconsax-react'; // Import the back icon from IconSax
import dummyData from "../constants/dummyFood";

export default function FoodDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const foodItem = dummyData[id];

  if (!foodItem) {
    return <div>Food item not found</div>;
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="flex items-center space-x-4 p-4 bg-white shadow-md">
        <button onClick={() => navigate(-1)} className="flex-shrink-0">
          <ArrowLeft size="24" color="#6B8E23" />
        </button>
        <h1 className="text-3xl font-bold text-[#6B8E23]">{foodItem.name}</h1>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="text-lg">
          <p className="font-dmSans">
            <span className="text-[#6B8E23]">Quantity: </span>
            <span className="text-black">{foodItem.quantity}</span>
          </p>
          <p className="font-dmSans">
            <span className="text-[#6B8E23]">Quality: </span>
            <span className="text-black">{foodItem.quality}</span>
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-[#6B8E23]">Recipes</h2>
          {foodItem.recipes && foodItem.recipes.length > 0 ? (
            foodItem.recipes.map((recipe, index) => (
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
