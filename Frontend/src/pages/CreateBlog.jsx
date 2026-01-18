import React, { useState } from "react";
import axios from "axios";

function CreateBlog() {
    const [blog, setBlog] = useState({
        title: "",
        description: "",
        date: "",
        author: "",
        category: "",
        img : ""
    });

    const handleChange = (e) => {
        setBlog({
            ...blog,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/blog", blog);
            if (response.status === 201 || response.status === 200) {
                alert("Xogta si guul leh ayaa loo keydiyey!");

                setBlog({ title: "", description: "", date: "", author: "", category: "" });
            }
        } catch (err) {
            console.error("Khalad ayaa dhacay", err);
            alert("Xogta ma uusan keydsamin, hubi server-kaaga.");
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
            <h1 className="text-3xl font-bold text-center mb-8 text-purple-600 uppercase">
                Create New Blog </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input className="border p-3 rounded focus:outline-purple-400" type="text" name="title" placeholder="Blog Title" value={blog.title} onChange={handleChange} required />
                <div className="flex flex-col gap-1">
                    <input className="border-2 border-black p-3 rounded-xl focus:border-purple-400 focus:outline-none bg-purple-510 "type="text" name="img" placeholder="Paste image link (https://...)" 
                        value={blog.img} onChange={handleChange} 
                    />
                </div>
                <textarea className="border p-3 rounded h-32 focus:outline-purple-400" name="description" placeholder="Description" value={blog.description} onChange={handleChange} required />
                <div className="grid grid-cols-2 gap-4">
                    <input className="border p-3 rounded focus:outline-purple-400" type="date" name="date" value={blog.date} onChange={handleChange} />
                    <input className="border p-3 rounded focus:outline-purple-400" type="text" name="author" placeholder="Author Name" value={blog.author} onChange={handleChange} />
                    
                </div>
                <input className="border p-3 rounded focus:outline-purple-400" type="text" name="category" placeholder="Category (e.g. Health, Tech)" value={blog.category} onChange={handleChange} />
                <button type="submit" className="bg-purple-600 text-white font-bold py-3 rounded hover:bg-purple-700 transition duration-300">  Submit Blog</button>
            </form>
        </div>
    );
}

export default CreateBlog;