const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors()); // Tani waa muhiim si aysan u dhicin "CORS Error"

const BlogRouter = require("./Router/Blog.js");
app.use("/blog", BlogRouter); // Hubi in URL-ka uu halkan ka bilaabmo

mongoose.connect("mongodb://localhost:27017/Blog").then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => console.log(err));

app.listen(8080, () => console.log("Server is running at 8080"));