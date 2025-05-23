import Mistakes from "../components/Mistakes";
import NewPlants from "../components/NewPlants";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="min-h-[50vh]">
      <Slider></Slider>
      <NewPlants></NewPlants>
      <Mistakes></Mistakes>
    </div>
  );
};
export default Home;
