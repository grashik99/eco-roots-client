import { use } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
    const {user} = use(AuthContext)
  if (user && user.email) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};
export default PrivateRoute;
