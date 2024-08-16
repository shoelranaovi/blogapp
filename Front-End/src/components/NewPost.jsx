import { useState } from "react";

import { useCreatepostMutation } from "../redux/features/blog/blogApi";

export default function NewPost() {
  const [fromdata, setfromData] = useState({
    title: "",
    description: "",
    coverImg: "",
    content: "",
    category: "",
    rating: "",
  });
  console.log(fromdata);

  const [createpost] = useCreatepostMutation();

  function onchange(e) {
    setfromData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  async function submit(e) {
    console.log(fromdata);

    e.preventDefault();
    try {
      const response = await createpost(fromdata).unwrap();
      console.log(response);
      alert("post");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="max-w-md mx-auto mb-4 bg-white p-4  ">
      <form className="flex flex-col gap-6">
        <div>
          <h1 className="font-bold text-3xl">Create A Post </h1>
        </div>
        <div className=" flex flex-col gap-3">
          <label className=" text-lg " htmlFor="title">
            {" "}
            Title :
          </label>

          <input
            type="text"
            id="title"
            value={fromdata.title}
            onChange={onchange}
            className="h-10 focus:outline-none bg-slate-200 px-2 "
            placeholder="Type your title"
            required
          />
        </div>
        <div className=" flex flex-col gap-3">
          <label className=" text-lg " htmlFor="description">
            {" "}
            Description :
          </label>

          <input
            id="description"
            value={fromdata.description}
            onChange={onchange}
            type="text"
            className="h-20 focus:outline-none bg-slate-200 px-2 "
            placeholder="Type your title"
            required
          />
        </div>
        <div className=" flex flex-col gap-3">
          <label className=" text-lg " htmlFor="coverImg">
            {" "}
            CoverImg :
          </label>

          <input
            type="text"
            id="coverImg"
            value={fromdata.coverImg}
            onChange={onchange}
            className="h-10 focus:outline-none bg-slate-200 px-2 "
            placeholder="Type your title"
            required
          />
        </div>
        <div className=" flex flex-col gap-3">
          <label className=" text-lg " htmlFor="content">
            {" "}
            Content :
          </label>

          <input
            type="text"
            id="content"
            value={fromdata.content}
            onChange={onchange}
            className="h-28 focus:outline-none bg-slate-200 px-2 "
            placeholder="Type your title"
            required
          />
        </div>
        <div className=" flex flex-col gap-3">
          <label className=" text-lg " htmlFor="category">
            {" "}
            Category :
          </label>

          <select
            onChange={onchange}
            id="category"
            value={fromdata.category}
            className="h-10 bg-slate-100 focus:outline-none ">
            <option value="blog"> Blog</option>
            <option value="Social"> Social</option>
            <option value="computer"> Computer</option>
          </select>
        </div>
        <div className=" flex flex-col gap-3">
          <label className=" text-lg " htmlFor="rating">
            {" "}
            Rating :
          </label>

          <input
            type="number"
            id="rating"
            maxLength={1}
            value={fromdata.rating}
            onChange={onchange}
            className="h-10 focus:outline-none bg-slate-200 px-2 "
            placeholder="Type your rating"
            required
          />
        </div>

        <button
          onClick={submit}
          className="bg-black p-2 text-white text-lg hover:bg-purple-900 duration-100">
          Resgister
        </button>
      </form>
    </div>
  );
}
