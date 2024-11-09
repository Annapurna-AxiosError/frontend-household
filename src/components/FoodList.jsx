import React from 'react';

export default function FoodList({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {items.map((item, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden flex">
          <div className="w-1/3">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          </div>
          <div className="w-2/3 p-4">
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-gray-700">Quantity: {item.quantity}</p>
            <p className="text-gray-700">Quality: {item.quality}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
