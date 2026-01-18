const express = require("express");
const router = express.Router();
const BlogModel = require("../model/Blogs");

router.get("/", async (req, res) => {
    try {
        const blogs = await BlogModel.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const SingleRead = await BlogModel.findById(req.params.id);
        if (!SingleRead) return res.status(404).json({ message: "Blog-gan lama helin" });
        res.status(200).json(SingleRead);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/", async (req, res) => {
    const blog = new BlogModel(req.body);
    try {
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const UpdateBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!UpdateBlog) return res.status(404).json({ message: "Blog-ga lama helin" });
        res.status(200).json(UpdateBlog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const DeleteBlog = await BlogModel.findByIdAndDelete(req.params.id);
        if (!DeleteBlog) return res.status(404).json({ message: "Blog-ga lama helin" });
        res.status(200).json({ message: "Blog-ga waa la tirtiray" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;