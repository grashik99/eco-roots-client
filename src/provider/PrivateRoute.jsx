import { use } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "./AuthProvider";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return Loading;
  }
  if (user && user.email) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};
export default PrivateRoute;
