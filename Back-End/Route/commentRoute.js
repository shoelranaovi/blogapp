const express = require("express");
const errorHandler = require("../middleware/error");
const Comment = require("../model/commentModel");
const commentRoute = express.Router();

commentRoute.post("/createComment", async (req, res, next) => {
  try {
    const createComment = new Comment(req.body);
    const newComment = await createComment.save();
    res.status(201).json({
      message: "Comment created successfully",
      data: newComment,
      error: false,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return next(errorHandler());
  }
});
commentRoute.get("/getAllComment", async (req, res, next) => {
  try {
    const getAllcomment = await Comment.countDocuments({});
    res.status(200).json({
      massage: "found all commnet",
      data: getAllcomment,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log(error);
    return next(errorHandler());
  }
});
module.exports = commentRoute;
