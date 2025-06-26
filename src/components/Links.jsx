import { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Links = () => {
  const { user } = use(AuthContext);
  if (user?.email) {
    console.log("yes");
  }
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-plants">All Plants</NavLink>
      </li>
      {user?.email && (
        <>
          <li>
            <NavLink to="/deshboard">Deshboard</NavLink>
          </li>
        </>
      )}
    </>
  );
};
export default Links;
