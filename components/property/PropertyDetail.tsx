import React from "react";
import Image from "next/image";
import { PropertyProps } from "@/interfaces";

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-gray-200 relative">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="w-full h-full object-cover"
        />
        {property.discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
            {property.discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{property.name}</h3>
        <p className="text-gray-600 text-sm mb-2">
          {property.address.city}, {property.address.state},{" "}
          {property.address.country}
        </p>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500">★</span>
          <span className="ml-1 text-sm font-medium">{property.rating}</span>
        </div>
        <div className="text-xs text-gray-500 mb-3">
          {property.offers.bed} bed • {property.offers.shower} shower •{" "}
          {property.offers.occupants} guests
        </div>
        <div className="font-bold text-lg">
          ${property.price}{" "}
          <span className="text-gray-600 text-sm">/ night</span>
        </div>

        {/* Display categories if they exist */}
        {property.category && property.category.length > 0 && (
          <div className="mt-3">
            <div className="flex flex-wrap gap-2">
              {property.category.map((cat, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetail;
