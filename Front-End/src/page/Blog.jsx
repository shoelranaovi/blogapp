import { useParams } from "react-router-dom";
import { useFetchSingleBlogsQuery } from "../redux/features/blog/blogApi";

import CommentCard from "../components/CommentCard";
import PostACommet from "../components/PostACommet";
import RelatedBlog from "../components/RelatedBlog";
import { useEffect, useState } from "react";

function Blog() {
  const path = useParams();
  const { data: blog = [] } = useFetchSingleBlogsQuery(path.id);

  const [comment, setcomment] = useState(null);
  console.log(comment);

  const farmatDate = (isDate) => {
    const date = new Date(isDate);
    return date.toDateString("en-us", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  async function fetchcomment() {
    const response = await fetch(
      `http://localhost:3000/api/blog/getbookbyid/${path.id} `
    );
    const data = await response.json();
    console.log(data);
    setcomment(data.comment);
  }
  useEffect(() => {
    fetchcomment();
  }, [path.id]);
  return (
    <div className=" flex flex-col md:flex-row  container gap-4 p-8 mb-10 mx-auto mt-6 ">
      <div className="bg-white w-full  md:w-3/4  flex flex-col  pb-5 p-8 ">
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
            <div>{blog.blog?.description} </div>
            <div>
              <span className="font-bold">Rating:</span> {blog.blog?.rating}{" "}
              (Based on 2,370 Reviews)
            </div>
          </div>
        </div>
        <CommentCard comment={comment} />
        <PostACommet setComments={fetchcomment} />
      </div>
      <div className="w-full lg:w-1/4 bg-slate-50 p-2">
        <RelatedBlog />
      </div>
    </div>
  );
}

export default Blog;
