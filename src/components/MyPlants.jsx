import { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import PlantCard from "./PlantCard";

const MyPlants = () => {
  const { user } = use(AuthContext);
  const data = useLoaderData();
  const addedByUser = data.filter((tree) => tree.userEmail === user.email);
  return (
    <div className="md:grid grid-cols-2">
      {addedByUser.map((plant) => (
        <PlantCard key={plant._id} plant={plant}></PlantCard>
      ))}
    </div>
  );
};
export default MyPlants;
