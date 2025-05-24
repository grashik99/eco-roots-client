import { useLoaderData } from "react-router";
import PlantCard from "./PlantCard";
import { useState } from "react";

const AllPlants = () => {
  const data = useLoaderData();
  const [sortPlants, setSortPlants] = useState(data);
  console.log(sortPlants);

  const sortByName = () => {
    const sortedByName = [...sortPlants].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setSortPlants(sortedByName);
  };

  const sortByNextWatering = () => {
    const sortedByDate = [...sortPlants].sort((a, b) => {
      return new Date(a.nextWatering) - new Date(b.nextWatering);
    });
    setSortPlants(sortedByDate);
  };

  const careLevelOrder = {
    Easy: 1,
    Moderate: 2,
    Difficult: 3,
  };

  const sortByCareLevel = () => {
    const sortedByCare = [...sortPlants].sort((a, b) => {
      return careLevelOrder[a.careLevel] - careLevelOrder[b.careLevel];
    });

    setSortPlants(sortedByCare);
  };

  return (
    <div>
      <div className="my-3 flex items-center space-x-4 justify-end">
        <h1 className="text-2xl font-medium">Sort By:</h1>
        <button className="btn" onClick={sortByName}>
          Name
        </button>
        <button className="btn" onClick={sortByNextWatering}>
         Watering
        </button>
        <button className="btn" onClick={sortByCareLevel}>
         Care Level
        </button>
      </div>
      <div className="md:grid grid-cols-3">
        {sortPlants.map((plant) => (
          <PlantCard key={plant._id} plant={plant}></PlantCard>
        ))}
      </div>
    </div>
  );
};
export default AllPlants;
