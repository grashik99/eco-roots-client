import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayouts = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[53vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default HomeLayouts;
