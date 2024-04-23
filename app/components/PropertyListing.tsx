import Image from 'next/image';
import Link from 'next/link';
import { Property } from '../lib/types';

interface PropertyListingProps {
  property: Property;
}

const PropertyListing: React.FC<PropertyListingProps> = ({ property }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
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