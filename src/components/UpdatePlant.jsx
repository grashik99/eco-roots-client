import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router";
import Loading from "./Loading";
import Swal from "sweetalert2";

const UpdatePlant = () => {
  const data = useLoaderData();
  console.log(data);

  const navigate = useNavigate();

  const { user, loading } = use(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.userEmail !== user.email) {
      Swal.fire({
        icon: "error",
        title: "You are not Authorized to Update",
      });
      navigate("/my-plants");
      return;
    }
    const form = e.target;

    const UpPlant = {
      image: form.image.value,
      name: form.name.value,
      category: form.category.value,
      description: form.description.value,
      careLevel: form.careLevel.value,
      wateringFrequency: form.wateringFrequency.value,
      lastWatered: form.lastWatered.value,
      nextWatering: form.nextWatering.value,
      healthStatus: form.healthStatus.value,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    fetch(`https://eco-roots-server.vercel.app/plants/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UpPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.modifiedCount === 1) {
          form.reset();
          navigate("/my-plants");
          Swal.fire({
            icon: "success",
            title: "Update successful",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "You don't enter any update",
          });
        }
      });
  };

  return (
    <div>
      {loading ? (
        Loading
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto p-6 bg-green-100 shadow-lg rounded-xl space-y-4 md:my-4"
        >
          <h2 className="text-2xl font-bold mb-4">Add New Plant</h2>

          <div>
            <label className="block mb-1 font-medium">Image URL</label>
            <input
              type="url"
              name="image"
              className="w-full border rounded px-3 py-2"
              placeholder="https://example.com/image.jpg"
              required
              defaultValue={data.image}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Plant Name</label>
            <input
              type="text"
              name="name"
              className="w-full border rounded px-3 py-2"
              required
              defaultValue={data.name}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Category</label>
            <select
              name="category"
              className="w-full border rounded px-3 py-2"
              required
              defaultValue={data.category}
            >
              <option value="Succulent">Succulent</option>
              <option value="Fern">Fern</option>
              <option value="Flowering">Flowering</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              name="description"
              className="w-full border rounded px-3 py-2"
              rows={4}
              required
              defaultValue={data.description}
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 font-medium">Care Level</label>
            <select
              name="careLevel"
              className="w-full border rounded px-3 py-2"
              required
              defaultValue={data.careLevel}
            >
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Difficult">Difficult</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Watering Frequency</label>
            <input
              type="number"
              name="wateringFrequency"
              className="w-full border rounded px-3 py-2"
              placeholder="e.g. every 3 days"
              required
              defaultValue={data.wateringFrequency}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Last Watered Date</label>
            <input
              type="date"
              name="lastWatered"
              className="w-full border rounded px-3 py-2"
              required
              defaultValue={data.lastWatered}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Next Watering Date</label>
            <input
              type="date"
              name="nextWatering"
              className="w-full border rounded px-3 py-2"
              required
              defaultValue={data.nextWatering}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Health Status</label>
            <select
              name="healthStatus"
              className="w-full border rounded px-3 py-2"
              required
              defaultValue={data.healthStatus}
            >
              <option value="">Select status</option>
              <option value="Healthy">Healthy</option>
              <option value="Wilting">Wilting</option>
              <option value="Yellowing">Yellowing</option>
              <option value="Dry">Dry</option>
              <option value="Infested">Infested</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
          >
            Update Plant
          </button>
        </form>
      )}
    </div>
  );
};
export default UpdatePlant;
