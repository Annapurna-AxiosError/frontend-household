import React from 'react';

export default function FoodList({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {items.map((item, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden flex font-dmSans">
          <div className="w-1/3 p-4">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            <h2 className="text-xl font-bold mt-4">{item.name}</h2>
          </div>
          <div className="w-2/3 p-4 flex flex-col justify-center">
            <p className="text-gray-700 mb-2">Quantity: {item.quantity}</p>
            <p className="text-gray-700">Quality: {item.quality}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
