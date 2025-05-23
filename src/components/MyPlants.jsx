import { use } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import PlantCard from "./PlantCard";
import Loading from "./Loading";

const MyPlants = () => {
  const { user } = use(AuthContext);
  const data = useLoaderData();
  const addedByUser = data.filter((tree) => tree.userEmail === user.email);
  return (
    <div>
      {addedByUser.length > 0 ? (
        <div className="md:grid grid-cols-2">
          {addedByUser.map((plant) => (
            <PlantCard key={plant._id} plant={plant}></PlantCard>
          ))}
        </div>
      ) : (
        <>
          <div className="w-full flex justify-center">
            <h1 className="text-2xl font-medium mt-24">
              You don't add any Plant.{" "}
              <Link className="text-blue-400" to="/add-plants">
                Add plants
              </Link>
            </h1>
          </div>
        </>
      )}
    </div>
  );
};
export default MyPlants;
