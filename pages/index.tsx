// import React, { useState } from "react";
// import IMAGES from "../public/assets/image1.png";
// import Pill from "../components/Pill";
// import PropertyCard from "../components/PropertyCard";
// import { PROPERTYLISTINGSAMPLE } from "@/constants";

// const filters = [
//   "Top Villa",
//   "Self Checkin",
//   "Amazing Views",
//   "Luxury",
//   "Beachfront",
//   "Cabins",
//   "Countryside",
//   "Mansions",
// ];

// const Home: React.FC = () => {
//   const [activeFilters, setActiveFilters] = useState<string[]>([]);

//   const toggleFilter = (label: string) => {
//     setActiveFilters((prev) =>
//       prev.includes(label) ? prev.filter((f) => f !== label) : [...prev, label]
//     );
//   };

//   return (
//     <div>
//       {/* Hero Section */}
//       <section
//         className="relative h-screen bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${IMAGES.src})` }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-40" />
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
//             Find your favorite place here!
//           </h1>
//           <p className="text-xl md:text-2xl lg:text-3xl">
//             The best prices for over 2 million properties worldwide.
//           </p>
//         </div>
//       </section>

//       {/* Filter Section */}
//       <section className="py-8 bg-white border-b">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex flex-wrap gap-3">
//             {filters.map((filter) => (
//               <Pill
//                 key={filter}
//                 label={filter}
//                 isActive={activeFilters.includes(filter)}
//                 onClick={() => toggleFilter(filter)}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Listing Section */}
//       <section className="py-12 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {PROPERTYLISTINGSAMPLE.map((property, index) => (
//               <PropertyCard key={index} property={property} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "@/components/PropertyCard"; // Assume this component exists

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
