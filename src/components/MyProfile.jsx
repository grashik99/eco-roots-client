import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaPenRuler } from "react-icons/fa6";
import Loading from "./Loading";
import { getAuth, sendEmailVerification } from "firebase/auth";

const MyProfile = () => {
  const { user, updateUser, loading, setLoading } = use(AuthContext);
  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const info = {
      email: user.email,
      name,
    };
    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        // console.log("Profile updated", user);
        fetch("http://localhost:3000/plants/", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(info),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        // Update user
        fetch("http://localhost:3000/users/", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(info),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        const modalCheckbox = document.getElementById("my_modal_7");
        if (modalCheckbox) modalCheckbox.checked = false;
        setLoading(false);
      })
      .catch((error) => {
      });
  };

  const verify = () => {
    const auth = getAuth();
    sendEmailVerification(auth.currentUser)
      .then(() => {
        alert("Email verification sent!");
      })
      .catch((error) => {
        console.error("Verification failed:", error);
        alert("Failed to send email verification.");
      });
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="max-w-lg mx-auto p-6 m-6 border rounded-2xl bg-base-200 space-y-2">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
              <img
                src={
                  user?.photoURL ||
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
                alt="User"
                className="w-10 h-10 rounded-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";
                }}
              />
            </div>
            <label htmlFor="my_modal_7" className="">
              <FaPenRuler />
            </label>
          </div>
          <h2 className="text-xl font-semibold">
            Name : {user?.displayName || "No Name set Yet"}
          </h2>
          <h2 className="text-[#6f6f6f]">Email : {user?.email}</h2>
          <h2
            className={
              user?.emailVerified
                ? "text-green-500 text-xl font-bold"
                : "text-red-300 text-xl font-bold"
            }
          >
            Verified Status : {user?.emailVerified ? "Yes" : "No"}
          </h2>
          {!user.emailVerified ? (
            <button className="btn btn-warning text-white" onClick={verify}>
              Completed verification
            </button>
          ) : (
            ""
          )}

          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box">
              <div className="hero min-h-[60vh] bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="card flex-shrink-0 w-full md:w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleUpdate} className="card-body">
                      <h1 className="text-2xl font-bold text-center">
                        Update Info
                      </h1>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Your name"
                          className="input input-bordered"
                          name="name"
                          defaultValue={user?.displayName}
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Photo URL</span>
                        </label>
                        <input
                          type="url"
                          placeholder="Photo URL"
                          className="input input-bordered"
                          name="photo"
                          defaultValue={user?.photoURL}
                        />
                      </div>

                      <div className="form-control mt-6">
                        <button className="btn btn-primary">Update</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">
              Close
            </label>
          </div>
        </div>
      )}
    </div>
  );
};
export default MyProfile;
