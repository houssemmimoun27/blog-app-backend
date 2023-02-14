const express = require("express");
const createError = require("http-errors");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//Init DB
require("./connectToDB")();

const BlogRoute = require("./Routes/Blog.route");
app.use("/blogs", BlogRoute);

app.use((req, res, next) => {
  next(createError(404, "Not found"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Sever started on port: ${PORT}`));
