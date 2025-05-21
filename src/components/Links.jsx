import { NavLink } from "react-router";

const Links = () => {
  return (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/all-plants">All Plants</NavLink></li>
      <li><NavLink to="/add-plants">Add Plants</NavLink></li>
      <li><NavLink to="/my-plants">My Plants</NavLink></li>
    </>
  )
};
export default Links;
