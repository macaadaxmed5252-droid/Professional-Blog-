const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const BlogRouter = require("./Router/blog.js");

mongoose.connect("mongodb://localhost:27017/Blog").then(() => {
    console.log("connected to MongoDB");
}).catch((err) => {
    console.log(err);
});

app.use("/blog", BlogRouter);

app.listen(8080, () => {
    console.log("Server is running at port 8080");
});