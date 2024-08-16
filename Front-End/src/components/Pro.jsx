import { useSelector } from "react-redux";
import { FaUserFriends } from "react-icons/fa";
import { FaBlog } from "react-icons/fa6";
import { useAlluserQuery } from "../redux/features/auth/userApi";
import { useFatchAllBlogQuery } from "../redux/features/blog/blogApi";
import { FaUserTie } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa6";
import { useFatchAllCommentQuery } from "../redux/features/comment/commentApi";

function Pro() {
  const { user } = useSelector((state) => state.user);

  const { data: users = [] } = useAlluserQuery();

  const admincount = users.data?.filter((user) => user.role === "Admin");
  const usercount = users.data?.filter((user) => user.role !== "Admin");
  const { data: blog = [] } = useFatchAllBlogQuery();
  const { data: comment = [] } = useFatchAllCommentQuery();

  return (
    <div>
      <div className="welcome-msg bg-gray-100 p-2">
        <p>
          Hi <span className="font-semibold">{user?.username} , </span>{" "}
        </p>
        <p>Welcome to the Admin DashBord</p>
        <p>Here you can mange hotel Post ,Mange Rooms and Other Administor</p>
      </div>
      <div className="flex flex-col mt-8 md:flex-row gap-4">
        <div className=" bg-purple-300 md:w-1/4 h-[150px] gap-4 flex flex-col justify-center items-center ">
          <FaUserFriends size={50} />
          <div> {usercount?.length} User </div>
        </div>
        <div className=" bg-green-200 md:w-1/4 h-[150px] gap-4 flex flex-col justify-center items-center ">
          <FaBlog size={45} />
          <div> {blog.blog?.length} Blog</div>
        </div>
        <div className=" bg-orange-300 md:w-1/4 h-[150px] gap-4 flex flex-col justify-center items-center ">
          <FaUserTie size={50} />
          <div> {admincount?.length} User</div>
        </div>
        <div className=" bg-red-300 md:w-1/4 h-[150px] gap-4 flex flex-col justify-center items-center ">
          <FaRegComments size={50} />
          <div>{comment.data} Comment</div>
        </div>
      </div>
    </div>
  );
}

export default Pro;
