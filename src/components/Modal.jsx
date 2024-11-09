import React from "react";

const Modal = ({
  title,
  content,
  date,
  priority,
  category,
  location,
  timeSlot,
  expectedQuantity,
  source,
  coordinator,
  onClose
}) => {
  const getModalContent = () => {
    switch (category) {
      case 'delivery':
        return "Do you want to join the delivery?";
      case 'campaign':
        return "Do you want to join the campaign?";
      case 'expiry':
        return "Is the food expired?";
      default:
        return "Do you want to participate?";
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-4">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{content}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs text-gray-500">Location</p>
            <p className="text-sm font-medium">{location}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Time Slot</p>
            <p className="text-sm font-medium">{timeSlot}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Expected Quantity</p>
            <p className="text-sm font-medium">{expectedQuantity}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Source</p>
            <p className="text-sm font-medium">{source}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Coordinator</p>
            <p className="text-sm font-medium">{coordinator}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Date</p>
            <p className="text-sm font-medium">{new Date(date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}</p>
          </div>
        </div>
        <p className="mb-4">{getModalContent()}</p>
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors duration-300"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-[#6B8E23] text-white rounded-lg hover:bg-[#556B2F] transition-colors duration-300"
            onClick={onClose}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
