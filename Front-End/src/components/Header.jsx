import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiAlignLeft } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
function Header() {
  const location = useLocation();
  const path = location.pathname;
  const [openmenu, setopenmenu] = useState(false);

  const navlist = [
    { name: "Home", path: "/home" },
    { name: "About Us", path: "/about" },
    { name: "Privacy policy", path: "/Privacy" },
    { name: "Contact us", path: "/contact" },
  ];
  return (
    <div className="flex  w-full px-16 justify-between  items-center h-16">
      <div className=" font-bold text-3xl">LOGO</div>
      <div className=" gap-6 hidden lg:flex">
        {navlist.map((item, i) => (
          <div key={i}>
            <Link
              className={path === item.path ? "active text-blue-200  " : ""}
              to={`${item.path}`}>
              {item.name}{" "}
            </Link>
          </div>
        ))}
      </div>

      <div className="flex gap-4  ">
        <div className=" border-2 p-4 flex justify-center items-center  border-gray-200 bg-white h-4">
          Log in
        </div>
        <div
          className="md:hidden cursor-pointer rounded-sm"
          onClick={() => setopenmenu(!openmenu)}>
          {openmenu ? <IoCloseSharp size={35} /> : <FiAlignLeft size={35} />}
        </div>
        {openmenu && (
          <div className=" absolute md:hidden bg-slate-200 w-full left-0 top-14 mt-4 flex flex-col gap-4 p-6">
            {navlist.map((item, i) => (
              <div className="w-full bg-slate-100 p-3" key={i}>
                <Link
                  className={path === item.path ? "active font-bold " : ""}
                  to={`${item.path}`}>
                  {item.name}{" "}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
