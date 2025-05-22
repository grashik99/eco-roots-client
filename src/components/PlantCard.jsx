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
        <p className="text-sm text-gray-500">Category: {plant.category}</p>

        <p className="text-gray-600">{plant.description}</p>

        <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
          <p><strong>Care Level:</strong> {plant.careLevel}</p>
          <p><strong>Watering:</strong> {plant.wateringFrequency} day(s)</p>
          <p><strong>Last Watered:</strong> {plant.lastWatered}</p>
          <p><strong>Next Watering:</strong> {plant.nextWatering}</p>
          <p><strong>Health:</strong> {plant.healthStatus}</p>
        </div>

        <hr className="my-3" />

        <p className="text-xs text-gray-500">
          Added by: <strong>{plant.userName}</strong> ({plant.userEmail})
        </p>
      </div>
    </div>
  );
};

export default PlantCard;
