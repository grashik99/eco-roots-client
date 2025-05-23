import { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

const NewPlants = () => {
  const [plants, setPlnats] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/plants")
      .then((res) => res.json())
      .then((data) => setPlnats(data));
  }, []);
  const recentSix = plants.slice(-6).reverse();
  console.log(recentSix);
  return (
    <div className="md:grid grid-cols-3">
      {recentSix.map((plant) => (
        <PlantCard key={plant._id} plant={plant} />
      ))}
    </div>
  );
};
export default NewPlants;
