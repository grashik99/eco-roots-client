import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyProfile = () => {
  const { user } = use(AuthContext);
  console.log(user);
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
          ||
        </label>
      </div>
      <h2>Name: {user?.displayName || "No Name set Yet"}</h2>
      <h2>email: {user?.email}</h2>
      <h2>Verified: {user?.emailVerified || "NO"}</h2>

      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};
export default MyProfile;
