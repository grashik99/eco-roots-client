import { Outlet } from "react-router";
import NavbarDeshboard from "./Deshboard/NavbarDeshboard";
import Aside from "./Deshboard/Aside";
import { useState } from "react";

const Deshboard = () => {
  const [aside, setAside] = useState(false);
  return (
    <div>
      <NavbarDeshboard aside={aside} setAside={setAside}/>
      <div className="md:grid grid-cols-12 ">
        <aside
          className={`md:col-span-2 min-h-screen w-3/4 md:w-full md:flex bg-gray-800 ${
            aside && "hidden"
          } absolute top-16 md:top-0 md:relative z-10`}
        >
          <Aside />
        </aside>
        <div className="col-span-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Deshboard;



// className={`
//             md:col-span-2 md:static md:block
//             fixed top-0 left-0 z-40 h-full w-3/4 bg-gray-800 transition-transform duration-300
//             ${aside ? 'translate-x-0' : '-translate-x-full'}
//           `}