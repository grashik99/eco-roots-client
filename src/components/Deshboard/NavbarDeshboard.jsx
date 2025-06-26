import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import logo from "../../assets/Logo.png"

const NavbarDeshboard = ({ setAside, aside }) => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="bg-gray-900 ">
      <div className="navbar w-11/12 mx-auto text-white">
        <div className="navbar-start">
          <Link to="/" className="btn text-xl">
                    Eco Roots <img src={logo} className="w-10" />
                  </Link>
          <button onClick={() => setAside(!aside)} className="btn md:hidden">
            hi
          </button>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/deshboard/my-plants">My Plants</Link></li>
            <li><Link to="/deshboard/add-plant">Add Plant</Link></li>
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />{" "}
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />{" "}
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-900 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/deshboard/my-profile">{user.displayName}</Link>
              </li>
              <li>
                <a
                  onClick={() => {
                    logOut(), navigate("/");
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavbarDeshboard;
