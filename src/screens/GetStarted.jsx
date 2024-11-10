import  { useState } from 'react';
import axios from 'axios';
import { Location } from 'iconsax-react';

export default function GetStarted() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [team_number, setTeamNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Phone Number:', phoneNumber);
    console.log('Location:', location);
    console.log('Team Number:', team_number);
    const response=await  axios.post('https://annapurna.arnabbhowmik019.workers.dev/v1/household/update-profile', {"phone": phoneNumber, "location": location, "family_id": team_number}, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
    if(response.status===200){
      window.location.href="/";
    }
  };

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

  return (
    <div className="flex flex-col items-start justify-start font-dmSans p-6 h-screen bg-gray-100">
      <h1 className="text-left font-dmSans font-bold text-3xl pl-4 pb-6">Get Started</h1>
      <form onSubmit={handleSubmit} className="flex gap-8 pt-20 flex-col w-full max-w-sm">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            Phone Number:
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            If you want to join in a Family please enter Family Number:
          </label>
          <input
            type="text"
            id="team_number"
            value={team_number}
            onChange={(e) => setTeamNumber(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Location:
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="location"
              value={location}
              onChange={handleLocationChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            <button
              type="button"
              onClick={handleGetCurrentLocation}
              className="ml-2 p-2 bg-gray-200 rounded"
            >
              {loading ? 'Loading...' : <Location size="24" color="#000" />}
            </button>
          </div>
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
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-[#6B8E23] hover:bg-green-700 text-white font-cameraObscura py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
