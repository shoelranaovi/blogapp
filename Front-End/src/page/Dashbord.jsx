import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Dashbord() {
  return (
    <div className="conatiner  flex flex-col md:flex-row gap-3  mx-auto p-2 mt-5 mb-1">
      <Sidebar />
      <div className=" bg-white w-full p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashbord;
