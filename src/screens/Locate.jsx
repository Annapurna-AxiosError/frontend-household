import React, { useState } from 'react';
import Logo from "../assets/LoginImage.svg";
import { Location, Send, CloseCircle } from 'iconsax-react';
import axios from 'axios';

export default function Locate() {
  const [location, setLocation] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');

  const handleLocationChange = async (e) => {
    const query = e.target.value;
    setLocation(query);

    if (query.length > 2) {
      try {
        const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
          params: {
            q: query,
            key: 'd0a88c3aa1844351924cbc1b29671ecd',
            limit: 5,
          },
        });
        setSuggestions(response.data.results);
      } catch (error) {
        console.error('Error fetching location suggestions:', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setLocation(suggestion.formatted);
    setSuggestions([]);
  };

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
              params: {
                q: `${latitude},${longitude}`,
                key: 'd0a88c3aa1844351924cbc1b29671ecd',
              },
            });
            const currentLocation = response.data.results[0].formatted;
            setLocation(currentLocation); // This updates the location input field
          } catch (error) {
            console.error('Error fetching current location:', error);
          } finally {
            setLoading(false);
          }
        },
        (error) => {
          console.error('Error getting current location:', error);
          setLoading(false);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the location input is empty or the location has not been obtained yet
    if (!location || loading) {
      alert('Please enter a location or wait for the location to be obtained.');
      return;
    }
    // Handle form submission logic here
    console.log('Location:', location);
    setIsModalOpen(true);
  };

  const handleModalSubmit = () => {
    // Handle modal form submission logic here
    console.log('Description:', description);
    console.log('Number of People:', numberOfPeople);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-start justify-start font-dmSans p-4 h-screen bg-gray-100 relative">
      <h1 className="text-left font-dmSans font-bold text-3xl pl-4 pb-6">Locate</h1>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full h-full">
        <div className="flex flex-col items-start justify-center w-full md:w-1/2 h-full">
          <div className="flex-grow flex flex-col items-center justify-center w-full">
            <button
              className="flex items-center justify-center bg-[#6B8E23] hover:bg-green-700 text-white font-bold py-4 px-8 md:py-6 md:px-12 lg:py-8 lg:px-16 rounded-full mb-2"
              onClick={handleGetCurrentLocation}
            >
              {loading ? 'Loading...' : <><Location size="24" color="#fff" className="mr-2" /> Locate HotSpot</>}
            </button>
            <div className="w-full mt-2 relative">
              <form onSubmit={handleSubmit} className="relative w-full">
                <input
                  type="text"
                  value={location}
                  onChange={handleLocationChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                  placeholder="Enter location"
                />
                <button type="submit" className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                  <Send size="24" color="#000" />
                </button>
              </form>
              {suggestions.length > 0 && (
                <ul className="absolute z-10 bg-white border border-gray-300 w-full mt-1 rounded shadow-lg">
                  {suggestions.map((suggestion) => (
                    <li
                      key={suggestion.geometry.lat + suggestion.geometry.lng}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    >
                      {suggestion.formatted}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-end items-end md:items-center">
          <img src={Logo} alt="Logo" className="w-full md:w-3/4 lg:w-2/3" />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Additional Information</h2>
              <button onClick={() => setIsModalOpen(false)}>
                <CloseCircle size="24" color="#000" />
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description:
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="3"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numberOfPeople">
                Number of People:
              </label>
              <input
                type="number"
                id="numberOfPeople"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleModalSubmit}
                className="bg-[#6B8E23] hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
