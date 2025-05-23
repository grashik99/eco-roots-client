import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link, useLoaderData } from "react-router";

const Slider = () => {
  const data = useLoaderData();
  return (
    <div className=" mx-auto">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {data.map((plant) => (
          <div key={plant._id}>
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <Link to={`/view-details/${plant._id}`}>
              <p className="legend ">
                Name : {plant.name} , Health Condition : {plant.healthStatus}
              </p>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
