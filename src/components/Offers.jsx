import { useEffect, useState } from "react";
import { Link } from "react-router";

const Offers = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("https://eco-roots-server.vercel.app/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data.slice(0, 4))); // Only first 4
  }, []);

  return (
    <div className="bg-yellow-600">
    <section className="max-w-7xl mx-auto px-4 py-8 ">
      <h2 className="text-3xl font-bold mb-6 text-center">🌿 Exclusive Offers</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {plants.map((plant) => (
          <div
            key={plant._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 relative"
          >
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-48 object-cover"
            />

            {/* Discount badge */}
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              20% OFF
            </span>

            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{plant.name}</h3>
              <p className="text-gray-500 mb-2">{plant.category}</p>

              <Link to={`view-details/${plant._id}`} className="btn btn-sm btn-outline btn-success">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </section></div>
  );
};

export default Offers;
