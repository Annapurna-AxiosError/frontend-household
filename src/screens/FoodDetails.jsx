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
    <div className="p-4 relative">
      <div className="flex items-center space-x-4">
        <button onClick={() => navigate(-1)} className="flex-shrink-0">
          <ArrowLeft size="24" color="#6B8E23" />
        </button>
        <h1 className="text-3xl font-bold text-[#6B8E23]">{foodItem.name}</h1>
      </div>
      <div className="text-lg mt-10">
        <p className="font-dmSans">
          <span className="text-[#6B8E23]">Quantity: </span>
          <span className="text-black">{foodItem.quantity}</span>
        </p>
        <p className="font-dmSans">
          <span className="text-[#6B8E23]">Quality: </span>
          <span className="text-black">{foodItem.quality}</span>
        </p>
      </div>
    </div>
  );
}
