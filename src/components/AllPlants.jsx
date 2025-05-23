import { useLoaderData } from "react-router";
import PlantCard from "./PlantCard";

const AllPlants = () => {
  const data = useLoaderData();
  return (
    <div className="md:grid grid-cols-3">
      {data.map((plant) => (
        <PlantCard key={plant._id} plant={plant}></PlantCard>
      ))}
    </div>
  );
};
export default AllPlants;
