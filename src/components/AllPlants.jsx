import { useLoaderData } from "react-router";
import PlantCard from "./PlantCard";

const AllPlants = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="md:grid grid-cols-2">
      {data.map((plant) => (
        <PlantCard key={plant._id} plant={plant}></PlantCard>
      ))}
    </div>
  );
};
export default AllPlants;
