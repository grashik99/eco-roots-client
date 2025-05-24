import { Link } from "react-router";

const PlantCard = ({ plant }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden w-11/12 border my-4 mx-auto">
      <img
        src={plant.image}
        alt={plant.name}
        className="w-full h-60 object-cover"
      />
      <div className="p-5 space-y-2">
        <h2 className="text-xl font-bold text-green-700">{plant.name}</h2>

        <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
          <p>
            <strong>Care Level:</strong> {plant.careLevel}
          </p>
          <p>
            <strong>Watering:</strong> {plant.wateringFrequency} day(s)
          </p>
          <p>
            <strong>Watering:</strong> {plant.nextWatering}
          </p>
        </div>
        <Link to={`/view-details/${plant._id}`}>
          <button className="btn btn-success text-white w-full">
            View Details
          </button>
        </Link>

        <hr className="my-3" />

        <p className="text-xs text-gray-500">
          Added by: <strong>{plant.userName}</strong> ({plant.userEmail})
        </p>
      </div>
    </div>
  );
};

export default PlantCard;
