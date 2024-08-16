import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PostACommet({ setComments }) {
  const params = useParams();
  const path = useParams();

  const [comment, setComment] = useState({
    comment: "",
    user: "66b4f370c62e78e30fc28b36",
    postId: params.id,
  });

  const navigate = useNavigate();

  function onchange(e) {
    setComment((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  async function onsubmit() {
    const response = await fetch(
      "http://localhost:3000/api/comment/createComment",
      {
        method: "post",
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(comment),
      }
    );
    const data = await response.json();
    setComment((prev) => ({ ...prev, comment: "" }));
    setComments();
    console.log(data);
    // navigate(`/blog/${path.id}`);
  }
  return (
    <div className=" bg-white p-4">
      <div className="w-full flex flex-col gap-4 md:w-1/2 ">
        <h1 className="p-5 font-bold text-lg">Post A Comment</h1>
        <textarea
          value={comment.comment}
          onChange={onchange}
          id="comment"
          className="p-2 focus:outline-none focus:border bg-slate-100 border-1"
          rows={10}
          cols={50}
          placeholder="Post a Comment"></textarea>
        <button
          type="submit"
          onClick={onsubmit}
          className="bg-black text-white py-2 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
}

export default PostACommet;
