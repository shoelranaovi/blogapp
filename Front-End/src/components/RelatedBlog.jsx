import { useParams } from "react-router-dom";
import { useFetchRelatedBlogsQuery } from "../redux/features/blog/blogApi";

function RelatedBlog() {
  const path = useParams();
  const { data: blog = [] } = useFetchRelatedBlogsQuery(path.id);
  const data = blog.data;
  console.log(data);

  return (
    <div className="w-full">
      <div className=" text-xl border-b-2 pb-2 flex gap-4 ">
        <div className="flex justify-center items-center">Related Blog</div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {blog.data?.length === 0 && <div> No post Found </div>}

        {blog.data?.map((item, i) => (
          <div key={i} className="flex w-[300px ] border-b mb-2 pb-2 gap-4">
            <div className=" flex   rounded-full">
              <img
                className="w-14 h-14 md:w-22 md:h-10 rounded-full"
                src={item.coverImg}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2 w-[300px]  ">
              <div className=" text-blue-300  text-wrap ">
                <p>{item.title.substring(0, 50)}... </p>
              </div>
              <div className="  ">
                <p>{item.description.substring(0, 50)}...</p>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedBlog;
