import Mistakes from "../components/Mistakes";
import NewPlants from "../components/NewPlants";
import PlantCareTipsSection from "../components/PlantCareTipsSection";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="min-h-[50vh]">
      <Slider></Slider>
      <NewPlants></NewPlants>
      <Mistakes></Mistakes>
      <PlantCareTipsSection></PlantCareTipsSection>
    </div>
  );
};
export default Home;
