import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FoodList({ items }) {
  const navigate = useNavigate();
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const userFamilyId = user?.current_family_id;

    if (userFamilyId) {
      const filtered = Object.values(items).filter(item => item.current_family_id === userFamilyId);
      setFilteredItems(filtered);
      //save filtered array in localstorage
      localStorage.setItem('filteredItems', JSON.stringify(filtered));
    }
  }, [items]);

  const handleCardClick = (index) => {
    navigate(`/food/${index}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {filteredItems.map((item, index) => (
        <div key={index} className="bg-background shadow-md rounded-lg overflow-hidden flex h-32 cursor-pointer" onClick={() => handleCardClick(index)}>
          <div className="w-1/3">
            <img src={item.google_pic} alt={item.food_name} className="w-full h-full object-cover" />
          </div>
          <div className="w-2/3 p-4 flex flex-col justify-center items-end">
            <h3 className="text-lg font-bold">{item.food_name}</h3>
            <p className="text-gray-600">{item.category}</p>
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
  ),
};
