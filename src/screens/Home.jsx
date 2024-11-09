import React, { useState } from 'react';
import EmptyList from "../components/EmptyList";
import FoodList from "../components/FoodList";

export default function Home() {
  const [foodList, setFoodList] = useState([0]);

  return (
    <div>
      <h1 className="text-left font-cameraObscura text-3xl text-[#6B8E23] pt-6 pl-6">Your Family</h1>
      {foodList.length === 0 ? <EmptyList /> : <FoodList items={foodList} />}
    </div>
  );
}
