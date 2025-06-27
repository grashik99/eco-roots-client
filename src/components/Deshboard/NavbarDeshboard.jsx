import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import logo from "../../assets/Logo.png";

const NavbarDeshboard = ({ setAside, aside }) => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="bg-gray-900 ">
      <div className="navbar w-11/12 mx-auto text-white">
        <div className="navbar-start">
          <button onClick={() => setAside(!aside)} className="btn md:hidden">
            X
          </button>
          <Link to="/" className="btn text-xl">
            Eco Roots <img src={logo} className="w-10" />
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <label className={`input rounded-full ${currentTheme ==="light" && 'text-black'}`}>
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="grow" placeholder="Search" />
            <kbd className="kbd kbd-sm">⌘</kbd>
            <kbd className="kbd kbd-sm">K</kbd>
          </label>
          
        </div>
        <div className="navbar-end space-x-2">
          <button className="btn btn-ghost btn-circle md:hidden">
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
                <Link to="/deshboard/">{user.displayName}</Link>
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
