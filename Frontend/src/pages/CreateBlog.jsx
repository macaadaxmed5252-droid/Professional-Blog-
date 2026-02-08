import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FiBriefcase, FiImage, FiType, FiFileText, FiTag, FiCalendar, FiSend } from "react-icons/fi";

function CreateBlog() {
    const [blog, setBlog] = useState({
        title: "",
        description: "",
        date: "",
        author: "",
        category: "",
        img: ""
    });

    const handleChange = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Publishing Story...',
            text: 'We are preparing your content for the world.',
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading()
        });

        try {
            const response = await axios.post("http://localhost:8080/blog", blog);

            if (response.status === 201 || response.status === 200) {
                Swal.fire({
                    title: "Published!",
                    text: "Your story is now live and ready to be read.",
                    icon: "success",
                    confirmButtonColor: "#9333ea"
                });
                setBlog({ title: "", description: "", date: "", author: "", category: "", img: "" });
            }
        } catch (err) {
            console.error("Cillad:", err.response?.data || err.message);
            Swal.fire({
                title: "Publishing Failed",
                text: "We couldn't reach the server. Please check your connection.",
                icon: "error",
                confirmButtonColor: "#ef4444"
            });
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-purple-900/5 p-8 md:p-12 border border-gray-100">
                <div className="mb-10">
                    <h1 className="text-4xl font-black text-gray-900 mb-3 tracking-tighter uppercase">New Story</h1>
                    <p className="text-gray-500 font-medium">Share your insights and experiences with the community.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-6">
                        {/* Title Input */}
                        <div className="relative group">
                            <FiType className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
                            <input
                                className="w-full bg-gray-50 border-none p-5 pl-12 rounded-2xl focus:ring-2 focus:ring-purple-600/20 focus:bg-white outline-none transition-all font-bold text-gray-900 placeholder:text-gray-400"
                                type="text"
                                name="title"
                                placeholder="Give your story a title..."
                                value={blog.title}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Image URL Input */}
                        <div className="relative group">
                            <FiImage className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
                            <input
                                className="w-full bg-gray-50 border-none p-5 pl-12 rounded-2xl focus:ring-2 focus:ring-purple-600/20 focus:bg-white outline-none transition-all font-medium text-gray-700 placeholder:text-gray-400"
                                type="text"
                                name="img"
                                placeholder="Cover image URL (e.g. Unsplash link)"
                                value={blog.img}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Description Textarea */}
                        <div className="relative group">
                            <FiFileText className="absolute left-4 top-6 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
                            <textarea
                                className="w-full bg-gray-50 border-none p-5 pl-12 rounded-2xl h-48 focus:ring-2 focus:ring-purple-600/20 focus:bg-white outline-none transition-all font-medium text-gray-700 placeholder:text-gray-400 resize-none"
                                name="description"
                                placeholder="What's your story about?"
                                value={blog.description}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Date Input */}
                            <div className="relative group">
                                <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
                                <input
                                    className="w-full bg-gray-50 border-none p-5 pl-12 rounded-2xl focus:ring-2 focus:ring-purple-600/20 focus:bg-white outline-none transition-all font-medium text-gray-700"
                                    type="date"
                                    name="date"
                                    value={blog.date}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Author Input */}
                            <div className="relative group">
                                <FiBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
                                <input
                                    className="w-full bg-gray-50 border-none p-5 pl-12 rounded-2xl focus:ring-2 focus:ring-purple-600/20 focus:bg-white outline-none transition-all font-medium text-gray-700 placeholder:text-gray-400"
                                    type="text"
                                    name="author"
                                    placeholder="Your full name"
                                    value={blog.author}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Category Input */}
                        <div className="relative group">
                            <FiTag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
                            <input
                                className="w-full bg-gray-50 border-none p-5 pl-12 rounded-2xl focus:ring-2 focus:ring-purple-600/20 focus:bg-white outline-none transition-all font-medium text-gray-700 placeholder:text-gray-400"
                                type="text"
                                name="category"
                                placeholder="Category (e.g. Technology, Lifestyle)"
                                value={blog.category}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full group bg-gray-900 text-white font-black py-6 rounded-3xl hover:bg-purple-600 hover:shadow-2xl hover:shadow-purple-200 transition-all duration-500 active:scale-[0.98] flex items-center justify-center gap-3 tracking-widest uppercase text-sm"
                    >
                        <span>Publish your story</span>
                        <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateBlog;
