import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaPenRuler } from "react-icons/fa6";

const MyProfile = () => {
  const { user, updateUser } = use(AuthContext);
  console.log(user);





const handleUpdate = (e) =>{
    e.preventDefault()
    const form = e.target;
      const name = form.name.value;
      const photo = form.photo.value;
      updateUser({ displayName: name, photoURL: photo });
        
          
        
}




  return (
    <div className="max-w-lg mx-auto p-6 m-6 ">
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
      <h2>Name: {user?.displayName || "No Name set Yet"}</h2>
      <h2>Email: {user?.email}</h2>
      <h2>Verified: {user?.emailVerified ? "Yes" : "No"}</h2>

      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div className="hero min-h-[60vh] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card flex-shrink-0 w-full md:w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleUpdate}  className="card-body">
                  <h1 className="text-2xl font-bold text-center">Update Info</h1>

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
  );
};
export default MyProfile;
