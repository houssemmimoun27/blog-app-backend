const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = {
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
};

const Blog = mongoose.model("blog", BlogSchema);
module.exports = Blog;
