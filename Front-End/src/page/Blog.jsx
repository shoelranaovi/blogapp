import { useParams } from "react-router-dom";
import { useFetchSingleBlogsQuery } from "../redux/features/blog/blogApi";

import CommentCard from "../components/CommentCard";

function Blog() {
  const path = useParams();

  const { data: blog = [] } = useFetchSingleBlogsQuery(path.id);
  console.log(blog.comment);
  console.log(blog.blog);
  const farmatDate = (isDate) => {
    const date = new Date(isDate);
    return date.toDateString("en-us", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className=" flex flex-col container gap-4 p-8 mb-10 mx-auto mt-6 ">
      <div className="bg-white   flex flex-col md:flex-row pb-5 p-8 ">
        <div className=" w-full md:w-3/4 ">
          <h1 className="text-3xl font-bold">{blog.blog?.title}</h1>
          <div className=" pt-5 flex flex-col gap-4">
            <div>
              {farmatDate(blog.blog?.createAt)} , by{" "}
              {blog.blog?.author.username}{" "}
            </div>
            <img
              src={blog.blog?.coverImg}
              className="bg-cover md:h-[450px] md:w-[90%] "
              alt=""
            />
            <div>{blog?.content} </div>
            <div>
              <span className="font-bold">Rating:</span> {blog.blog?.rating}{" "}
              (Based on 2,370 Reviews)
            </div>
          </div>
        </div>
        <div className="">
          <h1>Releted post</h1>
        </div>
      </div>
      <CommentCard comment={blog?.comment} />
    </div>
  );
}

export default Blog;
