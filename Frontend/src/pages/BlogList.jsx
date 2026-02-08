import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FiTrash2, FiEdit3, FiEye, FiMoreVertical } from "react-icons/fi";
import Swal from 'sweetalert2'

function BlogList() {
    const [blogs, setBlogs] = useState([])
    const navigate = useNavigate();

    const DataAPI = async () => {
        try {
            const res = await axios.get("http://localhost:8080/blog")
            if (Array.isArray(res.data)) {
                setBlogs(res.data)
            } else {
                setBlogs([])
            }
        } catch (err) {
            console.log("Cillad ayaa ka jirta soo akhrinta xogta:", err)
        }
    }

    const handleDelete = (id) => {
        if (!id) return;

        Swal.fire({
            title: "Are you sure?",
            text: "This action will permanently delete this story.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it",
            cancelButtonText: "Keep it",
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#6b7280",
            customClass: {
                popup: 'rounded-[2rem]',
                confirmButton: 'rounded-xl px-6 py-2.5 font-bold',
                cancelButton: 'rounded-xl px-6 py-2.5 font-bold'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8080/blog/${id}`).then(() => {
                    setBlogs(blogs.filter((item) => item._id !== id));
                    Swal.fire({
                        title: "Deleted!",
                        text: "The story has been removed from our database.",
                        icon: "success",
                        confirmButtonColor: "#9333ea"
                    });
                }).catch((err) => {
                    console.log(err);
                    Swal.fire({ title: "Error", text: "Something went wrong.", icon: "error" });
                });
            }
        });
    };

    useEffect(() => {
        DataAPI()
    }, [])

    return (
        <div className="max-w-7xl mx-auto py-10 px-4">
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tighter uppercase mb-2">Manage Stories</h1>
                    <p className="text-gray-500 font-medium">You have {blogs.length} published stories.</p>
                </div>
                <button
                    onClick={() => navigate('/create')}
                    className="bg-purple-600 text-white font-bold px-8 py-3 rounded-2xl hover:bg-purple-700 hover:shadow-xl hover:shadow-purple-100 transition-all active:scale-95 text-sm uppercase tracking-widest"
                >
                    + New Story
                </button>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-purple-900/5 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100">
                                <th className="px-8 py-6 text-[11px] font-black text-gray-400 uppercase tracking-widest">Story Info</th>
                                <th className="px-8 py-6 text-[11px] font-black text-gray-400 uppercase tracking-widest hidden md:table-cell">Category</th>
                                <th className="px-8 py-6 text-[11px] font-black text-gray-400 uppercase tracking-widest hidden lg:table-cell">Author & Date</th>
                                <th className="px-8 py-6 text-[11px] font-black text-gray-400 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {Array.isArray(blogs) && blogs.length > 0 ? (
                                blogs.map((item) => (
                                    <tr key={item._id} className="hover:bg-purple-50/30 transition-colors group">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    className="w-14 h-14 rounded-2xl object-cover border border-gray-100"
                                                    src={item.img || 'https://via.placeholder.com/100'}
                                                    alt=""
                                                />
                                                <div>
                                                    <p className="text-gray-900 font-bold group-hover:text-purple-600 transition-colors line-clamp-1">{item.title}</p>
                                                    <p className="text-xs text-gray-400 font-medium line-clamp-1 md:hidden">{item.category}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 hidden md:table-cell">
                                            <span className="bg-purple-100 text-purple-700 text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-wider">
                                                {item.category || "General"}
                                            </span>
                                        </td>
                                        <td className="px-8 py-5 hidden lg:table-cell">
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-sm font-bold text-gray-700">{item.author || 'Admin'}</span>
                                                <span className="text-[10px] font-medium text-gray-400">{item.date}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <div className="flex gap-2 justify-end">
                                                <button
                                                    onClick={() => navigate(`/update/${item._id}`)}
                                                    className="p-2.5 text-blue-500 hover:bg-blue-50 border border-transparent hover:border-blue-100 rounded-xl transition-all"
                                                    title="Edit Story"
                                                >
                                                    <FiEdit3 size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(item._id)}
                                                    className="p-2.5 text-red-500 hover:bg-red-50 border border-transparent hover:border-red-100 rounded-xl transition-all"
                                                    title="Delete Story"
                                                >
                                                    <FiTrash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="px-8 py-20 text-center text-gray-400 font-bold italic">
                                        No stories found in the database.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BlogList;