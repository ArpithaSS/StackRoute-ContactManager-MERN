const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/cmFSDB");
mongoose.connection
  .once("open", () => {
    console.log("Database connected");
  })
  .on("error", (err) => {
    console.log(err);
  });
app.use("/api", routes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});