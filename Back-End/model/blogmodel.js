const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    content: {
      type: Object,
      required: true,
    },
    coverImg: {
      type: String,
      default:
        "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    category: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    rating: Number,
    createAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const blog = mongoose.model("blog", blogSchema);
module.exports = blog;
