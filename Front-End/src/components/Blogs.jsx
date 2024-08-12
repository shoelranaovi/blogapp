import { useState } from "react";
import Search from "./Search";
import { useFetchBlogsQuery } from "../redux/features/blog/blogApi";
import { Link } from "react-router-dom";

function Blogs() {
  const [search, setSearch] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState({ search, category });

  ///get  data from redux
  const { data: blog = [], isLoading } = useFetchBlogsQuery(query);
  console.log(blog);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => setQuery({ search, category });
  console.log(blog);

  return (
    <div className="   mt-10 m-8 ">
      <Search
        search={search}
        handleSearchChange={handleSearchChange}
        handleSearch={handleSearch}
      />
      {isLoading ? (
        <div> Loading</div>
      ) : (
        <div>
          <div className=" mt-20 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
            {blog.blog?.map((item, index) => (
              <Link to={`/blog/${item._id}`} className="shadow-md" key={index}>
                <img src={item.coverImg} alt="" className=" h-72 w-full" />
                <div className="">
                  <h2 className="m-3 w-[400px]  ">
                    {item.title.substring(0, 30)}..{" "}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Blogs;
