import React, { useState } from 'react';
import EmptyList from "../components/EmptyList";
import FoodList from "../components/FoodList";
import { Add } from 'iconsax-react';
import dummyData from "../constants/dummyFood"; // Import the dummy data

export default function Home() {
  const [foodList, setFoodList] = useState(dummyData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [quality, setQuality] = useState('');

  const handleAddFood = (newFood) => {
    setFoodList([...foodList, newFood]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddFood({ name, quantity, quality, userImage: dummyData[0].userImage });
    setIsModalOpen(false);
    setName('');
    setQuantity('');
    setQuality('');
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <h1 className="text-left font-dmSans font-bold text-3xl pl-4 pb-6">Your Family</h1>
      <div className="flex justify-end pr-4 pb-4">
        <div className="bg-[#6B8E23] rounded-full p-2 cursor-pointer" onClick={() => setIsModalOpen(true)}>
          <Add size="32" color="#FFFFFF" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto pb-20">
        {foodList.length === 0 ? <EmptyList /> : <FoodList items={foodList} />}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-2xl mb-4 font-dmSans font-bold text-[#6B8E23]">Add Food Item</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-dmSans">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-dmSans">Quantity</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-dmSans">Quality</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={quality}
                  onChange={(e) => setQuality(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button type="button" className="mr-4 bg-gray-300 text-gray-700 p-2 rounded" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className="bg-[#6B8E23] text-white p-2 rounded">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
