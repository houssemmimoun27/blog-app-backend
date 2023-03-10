const mongoose = require("mongoose");

module.exports = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: process.env.DB_NAME,
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Mongodb connected..."))
    .catch(err => console.error(err.message));

  mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to db...");
  });

  mongoose.connection.on("error", err => {
    console.error(err.message);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose is disconnected");
  });
};
