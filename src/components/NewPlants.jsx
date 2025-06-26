import { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

const NewPlants = () => {
  const [plants, setPlnats] = useState([]);
  useEffect(() => {
    fetch("https://eco-roots-server.vercel.app/plants")
      .then((res) => res.json())
      .then((data) => setPlnats(data));
  }, []);
  const recentSix = plants.slice(-8).reverse();
  console.log(recentSix);
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-3xl md:text-5xl text-center font-bold">Featured Items</h1>
      <div className="md:grid md:grid-cols-3 lg:grid-cols-4">
        {recentSix.map((plant) => (
          <PlantCard key={plant._id} plant={plant} />
        ))}
      </div>
    </div>
  );
};
export default NewPlants;
