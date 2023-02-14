const express = require("express");
const router = express.Router();

const BlogController = require("../Controllers/Blog.Controller");

//Get All Blogs
router.get("/", BlogController.getAllBlogs);

//Create Blog
router.post("/", BlogController.saveBlog);

//Get Blog By ID
router.get("/:id", BlogController.getBlogByID);

module.exports = router;
