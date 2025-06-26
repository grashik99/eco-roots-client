import Mistakes from "../components/Mistakes";
import NewPlants from "../components/NewPlants";
import Offers from "../components/Offers";
import PlantCareTipsSection from "../components/PlantCareTipsSection";
import Reviews from "../components/Reviews ";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="min-h-[50vh]">
      <Slider></Slider>
      <NewPlants></NewPlants>
      <Offers/>
      <Mistakes></Mistakes>
      <PlantCareTipsSection></PlantCareTipsSection>
      <Reviews />
    </div>
  );
};
export default Home;
