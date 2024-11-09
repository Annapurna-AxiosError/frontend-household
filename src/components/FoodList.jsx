import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function FoodList({ items }) {
  const navigate = useNavigate();

  const handleCardClick = (index) => {
    navigate(`/food/${index}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {items.map((item, index) => (
        <div key={index} className="bg-background shadow-md rounded-lg overflow-hidden flex h-32 cursor-pointer" onClick={() => handleCardClick(index)}>
          <div className="w-1/3">
            <img src={item.userImage} alt={item.name} className="w-full h-full object-cover" />
          </div>
          <div className="w-2/3 p-4 flex flex-col justify-center items-end">
            <h2 className="text-xl font-marcellus text-primary">{item.name}</h2>
            <p className="text-darkGreen">{item.quantity}</p>
            <p className="text-darkSlate">{item.quality}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

FoodList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.string.isRequired,
      quality: PropTypes.string.isRequired,
      userImage: PropTypes.string.isRequired,
    })
  ).isRequired,
};
