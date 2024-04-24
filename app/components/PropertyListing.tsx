// import Image from 'next/image';
import Link from 'next/link';
import { Property } from '../lib/types';

interface PropertyListingProps {
  property: Property;
}

const PropertyListing: React.FC<PropertyListingProps> = ({ property }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src="https://www.shutterstock.com/shutterstock/photos/2272988501/display_1500/stock-photo-home-design-bayside-in-melbourne-australia-2272988501.jpg"
          alt={property.title}
          className="object-cover h-48 w-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-2">{property.description}</p>
        <div className="flex justify-between items-center">
          <p className="text-green-600 font-bold">${property.price}/night</p>
          <Link
            href={`/properties/${property.id}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
