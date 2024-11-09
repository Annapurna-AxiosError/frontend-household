import React, { useState } from "react";
import {
  Timer,
  Profile2User,
  LocationAdd,
  Calendar,
  ArrowRight,
  Box,
  Shop,
  Clock
} from "iconsax-react";
import Modal from "./Modal"; // Assuming you have a Modal component

export default function AnnouncementCard({
  id,
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
  read,
  onToggleReadStatus
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleParticipateClick = () => {
    setIsModalOpen(true);
  };

  const handleToggleReadClick = (e) => {
    e.stopPropagation(); // Prevent triggering the card click event
    onToggleReadStatus(id);
  };

  const getPriorityStyles = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'medium':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'low':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getCategoryStyles = (category) => {
    switch (category) {
      case 'collection':
        return 'bg-emerald-100 text-emerald-700';
      case 'delivery':
        return 'bg-blue-100 text-blue-700';
      case 'emergency':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <>
      <div
        className={`bg-white rounded-xl p-6 mb-4 border border-gray-100 hover:shadow-lg transition-all duration-300 group ${read ? 'opacity-50' : ''}`}
      >
        {/* Header Section */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityStyles(priority)}`}>
                {priority?.toUpperCase()}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryStyles(category)}`}>
                {category?.toUpperCase()}
              </span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-[#6B8E23] transition-colors duration-300">
              {title}
            </h2>
          </div>
          <button
            className="px-3 py-1 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors duration-300"
            onClick={handleToggleReadClick}
          >
            {read ? 'Mark as Unread' : 'Mark as Read'}
          </button>
        </div>

        {/* Content Section */}
        <p className="text-gray-600 mb-6 line-clamp-2">
          {content}
        </p>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6 bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <LocationAdd size={20} className="text-[#6B8E23]" variant="Bulk" />
            <div>
              <p className="text-xs text-gray-500">Location</p>
              <p className="text-sm font-medium">{location}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={20} className="text-[#6B8E23]" variant="Bulk" />
            <div>
              <p className="text-xs text-gray-500">Time Slot</p>
              <p className="text-sm font-medium">{timeSlot}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Box size={20} className="text-[#6B8E23]" variant="Bulk" />
            <div>
              <p className="text-xs text-gray-500">Expected Quantity</p>
              <p className="text-sm font-medium">{expectedQuantity}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Shop size={20} className="text-[#6B8E23]" variant="Bulk" />
            <div>
              <p className="text-xs text-gray-500">Source</p>
              <p className="text-sm font-medium">{source}</p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar size={16} variant="Linear" />
              <span>{formatDate(date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Profile2User size={16} variant="Linear" />
              <span>{coordinator}</span>
            </div>
          </div>
          <button
            className="flex items-center gap-1 px-4 py-2 bg-[#6B8E23] text-white rounded-lg hover:bg-[#556B2F] transition-colors duration-300"
            onClick={handleParticipateClick}
          >
            Participate
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          title={title}
          content={content}
          date={date}
          priority={priority}
          category={category}
          location={location}
          timeSlot={timeSlot}
          expectedQuantity={expectedQuantity}
          source={source}
          coordinator={coordinator}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
