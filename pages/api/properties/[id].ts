import { NextApiRequest, NextApiResponse } from "next";

const properties = [
  {
    id: 1,
    name: "Modern Apartment in Downtown",
    image: "/images/property1.jpg",
    address: { city: "New York", country: "USA" },
    rating: 4.8,
    offers: { bed: 2, shower: 1, occupants: 4 },
    price: 120,
    discount: 10,
  },
  {
    id: 2,
    name: "Beachfront Villa",
    image: "/images/property2.jpg",
    address: { city: "Miami", country: "USA" },
    rating: 4.9,
    offers: { bed: 3, shower: 2, occupants: 6 },
    price: 250,
    discount: 15,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  // Find property by ID
  const property = properties.find((p) => p.id.toString() === id);

  if (!property) {
    return res.status(404).json({ error: "Property not found" });
  }

  res.status(200).json(property);
}
