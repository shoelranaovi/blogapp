/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa";

function CommentCard({ comment }) {
  console.log(comment);

  const farmatDate = (isDate) => {
    const date = new Date(isDate);
    return date.toDateString("en-us", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="w-full bg-white p-4">
      <h1 className="font-bold mb-6">All Comments</h1>
      {comment?.length === 0 && <div> No comment are availavail</div>}
      <div className="flex flex-col gap-4">
        {comment?.map((item, i) => (
          <div key={i} className="flex flex-col gap-4">
            <div className=" flex gap-4 ">
              <div className="p-4 w-25 rounded-full bg-slate-300 ">
                <FaUser className=" " size={25} />
              </div>
              <div>
                <div className="text-sm border-b">{item.user?.username} </div>
                <div className="text-xs">{farmatDate(item?.createdAt)} </div>
              </div>
            </div>
            <div className=" w-full lg:w-1/2 p-4  bg-gray-100">
              {item?.comment}{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentCard;
