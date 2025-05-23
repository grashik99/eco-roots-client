import { Link, useLoaderData } from "react-router";

const PlantDetails = () => {
  const plant = useLoaderData();

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row gap-6">
        {/* Image Section with Caption */}
        <div className="md:w-1/2 relative">
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-full max-h-[500px] object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-sm px-3 py-2">
            Added by: {plant.userName}
          </div>
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 p-4 space-y-3">
          <h2 className="text-3xl font-bold">{plant.name}</h2>
          <p><span className="font-semibold">Category:</span> {plant.category}</p>
          <p><span className="font-semibold">Care Level:</span> {plant.careLevel}</p>
          <p><span className="font-semibold">Watering Frequency:</span> Every {plant.wateringFrequency} days</p>
          <p><span className="font-semibold">Last Watered:</span> {plant.lastWatered}</p>
          <p><span className="font-semibold">Next Watering:</span> {plant.nextWatering}</p>
          <p><span className="font-semibold">Health Status:</span> {plant.healthStatus}</p>
          <div>
            <h3 className="font-semibold mt-2">Description:</h3>
            <p className="text-gray-700">{plant.description}</p>
          </div>
          <Link to={`/update-plant/${plant._id}`}>
          <button className="btn btn-success text-white w-full">
            Edit Information
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
