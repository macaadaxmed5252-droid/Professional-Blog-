const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String },
    author: { type: String, required: true },
    category: { type: String },
    img : { type: String,
        required: true
     }
}, { timestamps: true });

module.exports = mongoose.model("Blogs", BlogSchema);