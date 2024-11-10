import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { SearchNormal1 } from 'iconsax-react';
import { useEffect, useState } from 'react';

// Fix for default markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function MapView() {
  const [locations, setLocations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    async function fetchCampaigns() {
      try {
        const response = await axios.get('https://annapurna.arnabbhowmik019.workers.dev/v1/ngo/campaigns');
        setLocations(response.data.results);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    }
    fetchCampaigns();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
        params: {
          q: searchQuery,
          key: 'd0a88c3aa1844351924cbc1b29671ecd', // Replace with your OpenCage API key
        },
      });
      const results = response.data.results.map((result, index) => ({
        posting_id: index,
        campaign_title: result.formatted,
        campaign_description: 'Search result description',
        food_type: 'Unknown',
        food_category: 'Unknown',
        total_quantity: 0,
        quantity_unit: 'Unknown',
        estimated_servings: 0,
        dietary_restrictions: 'Unknown',
        food_condition: 'Unknown',
        preparation_date: 'Unknown',
        availability_start_time: 'Unknown',
        availability_end_time: 'Unknown',
        pickup_location: result.formatted,
        latitude: result.geometry.lat,
        longitude: result.geometry.lng,
        pickup_type: 'Unknown',
        posting_status: 'Unknown',
        created_at: 'Unknown',
        updated_at: 'Unknown',
        NGO_id: 'Unknown',
      }));
      setSearchResults(results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  };

  const handleCloseModal = () => {
    setSelectedLocation(null);
  };

  return (
    <div className="h-screen w-full relative bg-gray-100">
      {/* Top Navigation */}
      <div className="absolute top-0 left-0 right-0 z-[1000] p-4 flex items-center gap-4 bg-white shadow-md">
        <div className="relative flex-1 max-w-md mx-auto">
          <SearchNormal1 size="20" color="#6B8E23" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search location"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6B8E23]"
          />
          <button
            onClick={handleSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#6B8E23] text-white px-4 py-2 rounded-full"
          >
            Search
          </button>
        </div>
      </div>

      {/* Map */}
      <div className="h-3/4 w-full">
        <MapContainer
          center={[19.2183, 72.9769]}
          zoom={14}
          className="h-full w-full"
          zoomControl={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          {locations.map((location) => (
            location.latitude && location.longitude && (
              <Marker
                key={location.posting_id}
                position={[location.latitude, location.longitude]}
                eventHandlers={{
                  click: () => handleMarkerClick(location),
                }}
              />
            )
          ))}
          {searchResults.map((result) => (
            result.latitude && result.longitude && (
              <Marker
                key={result.posting_id}
                position={[result.latitude, result.longitude]}
                eventHandlers={{
                  click: () => handleMarkerClick(result),
                }}
              />
            )
          ))}
        </MapContainer>
      </div>

      {/* Modal */}
      {selectedLocation && (
        <div className="fixed inset-0 z-[1001] flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4 text-[#6B8E23]">{selectedLocation.campaign_title || 'No Title'}</h3>
            <p className="mb-2">{selectedLocation.campaign_description || 'No Description'}</p>
            <p className="mb-2"><strong>Food Type:</strong> {selectedLocation.food_type || 'Unknown'}</p>
            <p className="mb-2"><strong>Quantity:</strong> {selectedLocation.total_quantity || 0} {selectedLocation.quantity_unit || 'Unknown'}</p>
            <p className="mb-2"><strong>Pickup Location:</strong> {selectedLocation.pickup_location || 'Unknown'}</p>
            <p className="mb-2"><strong>Availability:</strong> {selectedLocation.availability_start_time ? new Date(selectedLocation.availability_start_time).toLocaleString() : 'Unknown'} - {selectedLocation.availability_end_time ? new Date(selectedLocation.availability_end_time).toLocaleString() : 'Unknown'}</p>
            <button
              onClick={handleCloseModal}
              className="mt-4 bg-[#6B8E23] text-white px-4 py-2 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
