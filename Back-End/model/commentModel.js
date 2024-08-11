const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    user: String,
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blog",
      required: true,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("comment", commentSchema);
module.exports = Comment;
