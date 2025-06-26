import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayouts = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="mt-4">
        <Navbar />
      </div>
      <div className="min-h-[53vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default HomeLayouts;
