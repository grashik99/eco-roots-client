import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const authData = {
    name: "helloasdf",
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};
export default AuthProvider;
