import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Modal from 'react-modal';

const MapComponent = () => {
  const mapRef = useRef(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPinData, setSelectedPinData] = useState(null);

  useEffect(() => {
    if (mapRef.current) {
      return; // If map is already initialized, do nothing
    }

    // Set the view to Mumbai, Maharashtra
    mapRef.current = L.map('map').setView([19.0760, 72.8777], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapRef.current);

    const marker = L.marker([19.0760, 72.8777]).addTo(mapRef.current)
      .bindPopup('Mumbai, Maharashtra')
      .openPopup();

    marker.on('click', () => {
      setSelectedPinData({
        posting_id: 1,
        campaign_title: 'Food Donation Campaign',
        campaign_description: 'A campaign to donate food to the needy.',
        food_type: 'Vegetarian',
        food_category: 'Cooked',
        total_quantity: 100,
        quantity_unit: 'kg',
        estimated_servings: 200,
        dietary_restrictions: 'None',
        food_condition: 'Fresh',
        preparation_date: '2023-10-01',
        availability_start_time: '2023-10-01T08:00:00Z',
        availability_end_time: '2023-10-01T18:00:00Z',
        pickup_location: 'Mumbai, Maharashtra',
        latitude: 19.0760,
        longitude: 72.8777,
        pickup_type: 'Self Pickup',
        posting_status: 'Active',
        created_at: '2023-10-01T00:00:00Z',
        updated_at: '2023-10-01T00:00:00Z',
        NGO_id: 1
      });
      setModalIsOpen(true);
    });

    return () => {
      mapRef.current.remove(); // Clean up the map instance on component unmount
      mapRef.current = null;
    };
  }, []);

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPinData(null);
  };

  return (
    <div>
      <div id="map" className="h-[calc(80vh-4rem)] w-full"></div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        {selectedPinData && (
          <div>
            <h2 className="text-xl font-bold">{selectedPinData.campaign_title}</h2>
            <p>{selectedPinData.campaign_description}</p>
            <ul>
              <li><strong>Food Type:</strong> {selectedPinData.food_type}</li>
              <li><strong>Food Category:</strong> {selectedPinData.food_category}</li>
              <li><strong>Total Quantity:</strong> {selectedPinData.total_quantity} {selectedPinData.quantity_unit}</li>
              <li><strong>Estimated Servings:</strong> {selectedPinData.estimated_servings}</li>
              <li><strong>Dietary Restrictions:</strong> {selectedPinData.dietary_restrictions}</li>
              <li><strong>Food Condition:</strong> {selectedPinData.food_condition}</li>
              <li><strong>Preparation Date:</strong> {selectedPinData.preparation_date}</li>
              <li><strong>Availability Start Time:</strong> {selectedPinData.availability_start_time}</li>
              <li><strong>Availability End Time:</strong> {selectedPinData.availability_end_time}</li>
              <li><strong>Pickup Location:</strong> {selectedPinData.pickup_location}</li>
              <li><strong>Pickup Type:</strong> {selectedPinData.pickup_type}</li>
              <li><strong>Posting Status:</strong> {selectedPinData.posting_status}</li>
              <li><strong>Created At:</strong> {selectedPinData.created_at}</li>
              <li><strong>Updated At:</strong> {selectedPinData.updated_at}</li>
              <li><strong>NGO ID:</strong> {selectedPinData.NGO_id}</li>
            </ul>
            <button onClick={closeModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MapComponent;
