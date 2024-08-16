import { Link, useLocation } from "react-router-dom";
import { FaUserGear } from "react-icons/fa6";

function Sidebar() {
  const params = useLocation().pathname;
  console.log(params);

  return (
    <div className="  md:h-[80vh] p-8 mt w-full md:w-1/4   bg-white">
      <div className="flex pb-4 flex-col mt-10 justify-center items-center gap-2  ">
        <div className=" icon ">
          <FaUserGear className="text-purple-500" size={45} />{" "}
        </div>
        <h1> Admin</h1>
        <hr className=" w-full text-black bg-black" />
      </div>
      <div className=" flex flex-col gap-3 justify-center items-center">
        <Link
          as="div"
          className={
            params === "/Dashbord/dashbord" ? "font-bold text-purple-300" : ""
          }
          to={"dashbord"}>
          {" "}
          DashBoard
        </Link>
        <Link
          as="div"
          className={
            params === "/Dashbord/create-post"
              ? "font-bold text-purple-300"
              : null
          }
          to={"create-post"}>
          {" "}
          Add New Post
        </Link>
        <Link
          as="div"
          className={
            params === "/Dashbord/manage-post"
              ? "font-bold text-purple-300"
              : ""
          }
          to={"manage-post"}>
          {" "}
          Manage Item{" "}
        </Link>
        <Link
          className={
            params === "/Dashbord/user" ? "font-bold text-purple-300" : ""
          }
          to={"user"}>
          {" "}
          User
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
