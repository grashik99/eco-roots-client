import { use } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const PlantDetails = () => {
  const plant = useLoaderData();
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  console.log(user);

  const name = plant.name;
  const handleDelete = () => {
    if (plant.userEmail === user.email) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("delete");
          fetch("http://localhost:3000/plants", {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ name }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount === 1) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
                navigate("/my-plants");
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Failed to delete",
                });
              }
            });
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "You are not Authorized to Delete",
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 relative">
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-full max-h-[500px] object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-sm px-3 py-2">
            Added by: {plant.userName}
          </div>
        </div>

        <div className="md:w-1/2 p-4 space-y-3">
          <h2 className="text-3xl font-bold">{plant.name}</h2>
          <p>
            <span className="font-semibold">Category:</span> {plant.category}
          </p>
          <p>
            <span className="font-semibold">Care Level:</span> {plant.careLevel}
          </p>
          <p>
            <span className="font-semibold">Watering Frequency:</span> Every{" "}
            {plant.wateringFrequency} days
          </p>
          <p>
            <span className="font-semibold">Last Watered:</span>{" "}
            {plant.lastWatered}
          </p>
          <p>
            <span className="font-semibold">Next Watering:</span>{" "}
            {plant.nextWatering}
          </p>
          <p>
            <span className="font-semibold">Health Status:</span>{" "}
            {plant.healthStatus}
          </p>
          <div>
            <h3 className="font-semibold mt-2">Description:</h3>
            <p className="text-gray-700">{plant.description}</p>
          </div>
          <Link to={`/update-plant/${plant._id}`}>
            <button className="btn btn-success text-white w-full">
              Edit Information
            </button>
          </Link>
          <button
            onClick={handleDelete}
            className="btn btn-warning mt-2 text-white w-full"
          >
            Delete Plant
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
