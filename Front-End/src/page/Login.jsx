import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserLoginMutation } from "../redux/features/auth/userApi";
import { setUser } from "../Store/userSlice";
import { useDispatch } from "react-redux";

export default function Login() {
  const [fromdata, setfromData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userLogin] = useUserLoginMutation();

  function onchange(e) {
    setfromData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  async function submit(e) {
    console.log(fromdata);

    e.preventDefault();
    try {
      const response = await userLogin(fromdata).unwrap();
      console.log(response);

      dispatch(setUser(response.data));
      navigate("/");

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="max-w-sm mx-auto mb-4 bg-white p-4 mt-10 ">
      <form className="flex flex-col gap-6">
        <div>
          <h1 className="font-bold text-3xl">Please Log in</h1>
        </div>
        <div className="w-full justify-center items-center flex gap-6 p-2 ">
          <label className="" htmlFor="email">
            {" "}
            Email :
          </label>
          <input
            className=" w-3/4 bg-slate-200 h-10 focus:outline-none px-2 text-lg focus:border"
            type="email"
            placeholder="Type Your email"
            name=""
            id="email"
            value={fromdata.email}
            onChange={onchange}
          />
        </div>
        <div className="w-full justify-center items-center flex gap-4 p-2 ">
          <label className="" htmlFor="email">
            {" "}
            Password:
          </label>
          <input
            className=" w-3/4 bg-slate-200 h-10 focus:outline-none px-2 text-lg focus:border"
            type="text"
            placeholder="Type Your password"
            name=""
            id="password"
            value={fromdata.password}
            onChange={onchange}
          />
        </div>

        <button
          onClick={submit}
          className="bg-black p-2 text-white text-lg hover:bg-purple-900 duration-100">
          Login
        </button>
        <p>
          {"Don't"} have an account ? Register{" "}
          <Link className="text-blue-600">Here</Link>{" "}
        </p>
      </form>
    </div>
  );
}
