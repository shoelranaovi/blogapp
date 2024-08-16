import { useEffect, useState } from "react";
import { useFatchAllBlogQuery } from "../redux/features/blog/blogApi";
import { Link } from "react-router-dom";

function ManagePost() {
  const { data: blog = [] } = useFatchAllBlogQuery();
  const [blogdata, setBlogdate] = useState([]);
  useEffect(() => {
    setBlogdate(blog.blog);
  }, [blog]);
  console.log(blogdata);

  const farmatDate = (isDate) => {
    const date = new Date(isDate);
    return date.toDateString("en-us", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  async function deletehandale(id) {
    try {
      const res = await fetch(
        `http://localhost:3000/api/blog/deleteblog/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data);
      } else {
        setBlogdate((prev) => prev.filter((post) => post._id !== id));
        console.log(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  console.log(blog);
  return (
    <div className="overflow-scroll md:overflow-hidden">
      <table className="w-[1000px] scroll-y border-2 text-left overflow-y-auto">
        <thead className="border-2">
          <tr>
            <th>No.</th>
            <th>Blog Name</th>
            <th>Publish Date</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogdata?.map((item, i) => (
            <tr key={i} className="border-2 h-10">
              <td>{i + 1} </td>
              <td className="w-[500px]"> {item.title} </td>
              <td>{farmatDate(item.createAt)} </td>
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

export default ManagePost;
