import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useAlluserQuery } from "../redux/features/auth/userApi";

function User() {
  const { data: userdata = [] } = useAlluserQuery();

  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    setUsers(userdata.data);
  }, [userdata]);

  async function deletehandale(id) {
    try {
      const res = await fetch(
        `http://localhost:3000/api/auth/deleteuser/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        console.log(data);
      }

      setUsers((prev) => prev.filter((user) => user._id !== id));

      console.log(users);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="overflow-scroll md:overflow-hidden">
      <table className="w-[1000px] scroll-y border-2 text-left overflow-y-auto">
        <thead className="border-2">
          <tr>
            <th>No.</th>
            <th>User Email</th>
            <th>Role</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item, i) => (
            <tr key={i} className="border-2 h-10">
              <td>{i + 1} </td>
              <td className="w-[500px]"> {item.email} </td>
              <td>{item.role} </td>
              <td>
                {" "}
                <Link to={`/blog/${item._id}`}> Edit </Link>{" "}
              </td>
              <td
                className="bg-red-500 text-white text-center w-[80px]   "
                onClick={() => deletehandale(item._id)}>
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
