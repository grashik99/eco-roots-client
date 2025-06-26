import { NavLink } from "react-router";

const Aside = () => {
  return (
    <div className="w-full ">
      <ul className="menu w-full space-y-2 px-1">
        <li>
          <NavLink
            className="btn shadow w-full bg-success text-white text-lg font-bold"
            to="/deshboard/myProfile"
          >
            My Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            className="btn shadow w-full bg-success text-white text-lg font-bold"
            to="/deshboard/my-plants"
          >
            My Plants
          </NavLink>
        </li>
        <li>
          <NavLink
            className="btn shadow w-full bg-success text-white text-lg font-bold"
            to="/deshboard/add-plant"
          >
            Add Plant
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Aside;
