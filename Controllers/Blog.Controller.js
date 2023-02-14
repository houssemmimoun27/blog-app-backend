const createError = require("http-errors");
const mongoose = require("mongoose");

const Blog = require("../Models/Blog.model");

module.exports = {
  getAllBlogs: async (req, res, next) => {
    try {
      const results = await Blog.find({}, { __v: 0 });
      res.send(results);
    } catch (err) {
      console.error(err.message);
    }
  },
  saveBlog: async (req, res, next) => {
    try {
      const blog = new Blog(req.body);
      const result = await blog.save();
      res.send(result);
    } catch (err) {
      if ((err.name = "ValidationError")) {
        next(createError(422, err.message));
        return;
      }
      next(err);
    }
  },
  getBlogByID: async (req, res, next) => {
    const blogId = req.params.id;
    try {
      const blog = await Blog.findById(blogId);
      if (!blog) throw createError(404, "Blog does not exist");
      res.send(blog);
    } catch (err) {
      if (err instanceof mongoose.CastError) {
        next(createError(400, "Invalid Blog ID"));
        return;
      }
      next(err);
    }
  },
};
