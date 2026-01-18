import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Update() {


    const { id} = useParams();

    const  [Blog, setBlog] = useState({
        title: "",
        description: "",
        date: "",
        author: "",
        category: "",
        img : ""
    });

    const handlehange = (e) => {
        setBlog({
            ...Blog,
            [e.target.name]: e.target.value
        });
    }

    const hadnlesubmit = async (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/blog/${id}`, {
            ...Blog,
        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const fatchBlog = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/blog/${id}`);
            setBlog(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fatchBlog();
    }, []);




    return (
        <div>

            {/* <h1 className="text-3xl font-bold text-center mt-10">Update Page</h1> */}

            <div className="max-w-xl mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
    <h2 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">Update Blog</h2>
    
    <form className="space-y-4">
        {/* Title */}
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input 
                type="text" name="title" value={Blog.title} onChange={handlehange} 
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-blue-500" 
            />
        </div>

        {/* Description */}
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea 
                name="description" value={Blog.description} onChange={handlehange} 
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-blue-500 h-24" 
            />
        </div>

        {/* Row 1: Date & Author */}
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input 
                    type="text" name="date" value={Blog.date} onChange={handlehange} 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-blue-500" 
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                <input 
                    type="text" name="author" value={Blog.author} onChange={handlehange} 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-blue-500" 
                />
            </div>
        </div>

        {/* Row 2: Category & Image */}
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <input 
                    type="text" name="category" value={Blog.category} onChange={handlehange} 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-blue-500" 
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                <input 
                    type="text" name="img" value={Blog.img} onChange={handlehange} 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-blue-500" 
                />
            </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
            <button 
                type="submit" 
                onClick={hadnlesubmit} 
                className="bg-blue-600 text-white font-medium py-2 px-6 rounded hover:bg-blue-700 transition"
            >
                Update Blog
            </button>
        </div>
    </form>
</div>

        </div>
    )
}   


export default Update