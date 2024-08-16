const express = require("express");
const errorHandler = require("../middleware/error");
const blog = require("../model/blogmodel");
const Comment = require("../model/commentModel");
const verifyToken = require("../middleware/verify");
const isAdmin = require("../middleware/isAdmin");

const bookRouter = express.Router();

bookRouter.post(
  "/create-post",
  verifyToken,
  isAdmin,
  async (req, res, next) => {
    const { id } = req.user;

    try {
      if (!req.body) {
        return next(errorHandler(400, " post data are not found"));
      }
      const createPost = new blog({ ...req.body, author: id });
      const newPost = await createPost.save();
      res.status(200).json({
        data: newPost,
        message: "post Create Successfully",
        success: true,
        error: false,
      });
    } catch (error) {
      console.log(error);
      return next(errorHandler(400, error.message));
    }
  }
);
bookRouter.get("/getallbook", async (req, res, next) => {
  try {
    const { search, category, location } = req.query;

    let query = {};

    if (search) {
      query = {
        ...query,
        $or: [
          { title: { $regex: search, $options: "i" } },
          { content: { $regex: search, $options: "i" } },
        ],
      };
    }
    if (category) {
      query = {
        ...query,
        category,
      };
    }
    if (location) {
      query = {
        ...query,
        location,
      };
    }
    const findbook = await blog
      .find(query)
      .populate("author", "email")
      .sort({ createdAt: -1 });
    res.status(200).json({
      blog: findbook,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log(error);
    return next(errorHandler(400, error.message));
  }
});
bookRouter.get("/getbookbyid/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const findblog = await blog
      .findById(id)
      .populate("author", "role username");
    if (!findblog) {
      return next(errorHandler(400, "blog not found"));
    }
    const comment = await Comment.find({ postId: id }).populate(
      "user",
      "username email "
    );

    res.status(200).json({
      blog: findblog,
      comment: comment,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log(error);
    return next(errorHandler(400, error.message));
  }
});
bookRouter.patch("/updateblog/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content, description, author, rating } = req.body;
    if (!title) {
      return next(errorHandler(400, "information not found"));
    }
    const update = await blog.findByIdAndUpdate(
      id,
      {
        ...req.body,
      },
      { new: true }
    );
    res.status(200).json({
      updateblog: update,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log(error);
    next(errorHandler(400, error.message));
  }
});
bookRouter.delete("/deleteblog/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const deleteblog = await blog.findByIdAndDelete(id);
    await Comment.deleteMany({ postId: id });
    res.status(200).json({
      deletepost: deleteblog,
      message: "successfully delete",
      success: true,

      error: false,
    });
  } catch (error) {
    console.log(error);
    return next(errorHandler());
  }
});
bookRouter.get("/relatedpost/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const blogpost = await blog.findById(id);
    const titleRegex = new RegExp(blogpost.title.split(" ").join("|"), "i");
    const relatequrey = {
      _id: { $ne: id },
      title: { $regex: titleRegex },
    };
    const reletePost = await blog.find(relatequrey);
    res.status(200).json({
      data: reletePost,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log(error);
    return next(errorHandler());
  }
});

module.exports = bookRouter;
