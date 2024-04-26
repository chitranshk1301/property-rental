"use client";

import { useState } from "react";
import PropertyFilter from "./components/PropertyFilter";
import PropertyListing from "./components/PropertyListing";
import ProtectedRoute from "./components/ProtectedRoute";
import { Property } from "./lib/types";

// Sample data
const properties: Property[] = [
  {
    id: "1",
    title: "Cozy Apartment in the City",
    description: "A comfortable and modern apartment in the heart of the city.",
    image: "/images/property1.png",
    price: 120,
    bedrooms: 2,
    location: "New York, NY",
    amenities: ["Wi-Fi", "Air Conditioning", "Parking"],
  },
  {
    id: "2",
    title: "Luxurious Penthouse with a View",
    description: "An extravagant penthouse offering stunning city views.",
    image: "/images/property2.png",
    price: 350,
    bedrooms: 3,
    location: "Los Angeles, CA",
    amenities: ["Pool", "Gym", "Security"],
  },
  {
    id: "3",
    title: "Charming Cottage by the Lake",
    description: "A cozy cottage nestled by a serene lake.",
    image: "/images/property3.png",
    price: 180,
    bedrooms: 1,
    location: "Seattle, WA",
    amenities: ["Fireplace", "Deck", "Kitchenette"],
  },
  {
    id: "4",
    title: "Modern Loft in the Arts District",
    description: "A stylish loft located in the vibrant arts district.",
    image: "/images/property4.png",
    price: 200,
    bedrooms: 1,
    location: "San Francisco, CA",
    amenities: ["Balcony", "Workspace", "Laundry"],
  },
  {
    id: "5",
    title: "Spacious Family Home with Garden",
    description: "A large family home with a beautiful garden.",
    image: "/images/property5.png",
    price: 280,
    bedrooms: 4,
    location: "Chicago, IL",
    amenities: ["Playroom", "Outdoor Dining", "Garage"],
  },
  {
    id: "6",
    title: "Sunny Beachfront Villa",
    description: "A sunlit villa right by the beach.",
    image: "/images/property6.png",
    price: 450,
    bedrooms: 5,
    location: "Miami, FL",
    amenities: ["Private Beach Access", "Jacuzzi", "Barbecue"],
  },
  {
    id: "7",
    title: "Elegant Villa in the Countryside",
    description: "A beautiful villa surrounded by lush gardens.",
    image: "/images/property7.png",
    price: 500,
    bedrooms: 4,
    location: "Rural Area, TX",
    amenities: ["Swimming Pool", "Gazebo", "Greenhouse"],
  },
  {
    id: "8",
    title: "Cozy Bungalow in the Suburbs",
    description: "A charming bungalow with a large backyard.",
    image: "/images/property8.png",
    price: 300,
    bedrooms: 3,
    location: "Suburban Area, IL",
    amenities: ["Patio", "BBQ Area", "Garage"],
  },
];

export default function Home() {
  const [filteredProperties, setFilteredProperties] =
    useState<Property[]>(properties);

  const handleFilter = (filters: Record<string, any>) => {
    const { location, priceRange, bedrooms, amenities } = filters;
    const filtered = properties.filter((property) => {
      const matchesLocation =
        !location ||
        property.location.toLowerCase().includes(location.toLowerCase());
      const matchesPriceRange =
        property.price >= priceRange[0] && property.price <= priceRange[1];
      const matchesBedrooms = !bedrooms || property.bedrooms >= bedrooms;
      const matchesAmenities =
        !amenities.length ||
        amenities.every((amenity: any) => property.amenities.includes(amenity));

      return (
        matchesLocation &&
        matchesPriceRange &&
        matchesBedrooms &&
        matchesAmenities
      );
    });

    setFilteredProperties(filtered);
  };

  return (
    <ProtectedRoute>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Featured properties for you</h1>
      <div className="mb-5">
        <PropertyFilter onFilter={handleFilter} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyListing key={property.id} property={property} />
        ))}
      </div>
    </div>
    </ProtectedRoute>
  );
}
