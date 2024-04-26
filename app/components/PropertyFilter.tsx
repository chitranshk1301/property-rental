import React, { useState } from 'react';

interface PropertyFilterProps {
  onFilter: (filters: Record<string, any>) => void;
}

const PropertyFilter: React.FC<PropertyFilterProps> = ({ onFilter }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, Infinity]);
  const [bedrooms, setBedrooms] = useState(0);
  const [amenities, setAmenities] = useState<string[]>([]);

  const handleFilterChange = () => {
    const filters: Record<string, any> = {
      location,
      priceRange,
      bedrooms,
      amenities,
    };

    onFilter(filters);
  };

  const handlePriceRangeChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newPriceRange: any = [...priceRange];
    newPriceRange[index] = Number(event.target.value);
    setPriceRange(newPriceRange);
  };

  const handleAmenityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amenity = event.target.value;
    if (event.target.checked) {
      setAmenities([...amenities, amenity]);
    } else {
      setAmenities(amenities.filter((a) => a !== amenity));
    }
  };

  const locations = ['New York, NY', 'Los Angeles, CA', 'Seattle, WA', 'San Francisco, CA', 'Chicago, IL', 'Miami, FL', 'Rural Area, TX', 'Suburban Area, IL'];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-black">
      <button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="bg-gray-950 text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
      >
        <span>Filters </span>
        <span className={`transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`}>&#9660;</span>
      </button>

      {isFilterOpen && (
        <div className="mt-4">
          <div className="mb-4">
            <label htmlFor="location" className="block font-medium mb-2">
              Location
            </label>
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            >
              <option value="">All Locations</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="priceRange" className="block font-medium mb-2">
              Price Range
            </label>
            <div className="flex justify-between">
              <input
                id="priceRange"
                type="number"
                value={priceRange[0]}
                onChange={(e) => handlePriceRangeChange(e, 0)}
                className="w-full mr-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
              <span className="self-center">to</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => handlePriceRangeChange(e, 1)}
                className="w-full ml-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="bedrooms" className="block font-medium mb-2">
              Number of Bedrooms
            </label>
            <input
              id="bedrooms"
              type="number"
              value={bedrooms}
              onChange={(e) => setBedrooms(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-2">Amenities</label>
            <div className="flex flex-wrap">
              <div className="mr-4 mb-2">
                <input
                  type="checkbox"
                  value="wifi"
                  checked={amenities.includes('wifi')}
                  onChange={handleAmenityChange}
                  className="mr-2"
                />
                <label>WiFi</label>
              </div>
              <div className="mr-4 mb-2">
                <input
                  type="checkbox"
                  value="parking"
                  checked={amenities.includes('parking')}
                  onChange={handleAmenityChange}
                  className="mr-2"
                />
                <label>Parking</label>
              </div>
              <div className="mr-4 mb-2">
                <input
                  type="checkbox"
                  value="pool"
                  checked={amenities.includes('pool')}
                  onChange={handleAmenityChange}
                  className="mr-2"
                />
                <label>Pool</label>
              </div>
            </div>
          </div>

          <button
            onClick={handleFilterChange}
            className="bg-gray-950 text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
          >
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyFilter;