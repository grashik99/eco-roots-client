import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link, useLoaderData } from "react-router";

const Slider = () => {
  const data = useLoaderData();

  // Get only the last 4 items
  const lastFour = data.slice(-4);

  return (
    <div className="my-4">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {lastFour.map((plant) => (
          <div key={plant._id}>
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <Link to={`/view-details/${plant._id}`}>
              <p className="legend">
                Name: {plant.name}, Health Condition: {plant.healthStatus}
              </p>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
