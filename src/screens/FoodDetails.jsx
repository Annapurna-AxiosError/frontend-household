import { useParams } from 'react-router-dom';
import dummyData from "../constants/dummyFood";

export default function FoodDetails() {
  const { id } = useParams();
  const foodItem = dummyData[id];

  if (!foodItem) {
    return <div>Food item not found</div>;
  }

  return (
    <div className="p-4 relative">
      <h1 className="text-3xl font-bold text-[#6B8E23]">{foodItem.name}</h1>
      <div className="text-lg mt-10">
        <p className="text-[#6B8E23] font-dmSans">Quantity: {foodItem.quantity}</p>
        <p className="text-[#6B8E23] font-dmSans">Quality: {foodItem.quality}</p>
      </div>
    </div>
  );
}
