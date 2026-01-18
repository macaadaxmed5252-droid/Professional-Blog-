import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FaTrash, FaEdit } from 'react-icons/fa' // Waxaad u baahantahay: npm install react-icons

function BlogList() {
    const [BlogList, setBlogList] = useState([])
    const navigate = useNavigate();

    const DataAPI = async () => {
        axios.get("http://localhost:8080/blog").then((res) => {
            setBlogList(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this Content?")) {
            axios.delete(`http://localhost:8080/blog/${id}`).then((res) => {
                setBlogList(BlogList.filter((item) => item._id !== id))
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    useEffect(() => {
        DataAPI()
    }, [])

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-purple-500 w-fit pb-2">
                Manage Blogs
            </h1>

            <div className='flex flex-col gap-6'>
                {BlogList.map((item, index) => (
                    <div key={index} className='bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex overflow-hidden'>
                        
                        {/* QAYBTA BIDIX: QORAALKA */}
                        <div className='flex-1 p-6 flex flex-col justify-between'>
                            <div>
                                <span className='bg-purple-100 text-purple-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider'>
                                    {item.category || "General"}
                                </span>
                                <h1 className='text-2xl font-bold text-gray-800 mt-3 mb-2 leading-tight'>
                                    {item.title}
                                </h1>
                                <p className='text-gray-500 text-sm line-clamp-2 leading-relaxed'>
                                    {item.description}
                                </p>
                            </div>

                            <div className='mt-6 flex justify-between items-center'>
                                <div className='flex flex-col'>
                                    <span className='text-sm font-bold text-gray-700'>{item.author}</span>
                                    <span className='text-xs text-gray-400'>{item.date}</span>
                                </div>

                                {/* BADHAMADA */}
                                <div className='flex gap-3'>
                                    <button 
                                        onClick={() => navigate(`/update/${item._id}`)} 
                                        className='flex items-center gap-2 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors text-sm font-semibold'
                                    >
                                        <FaEdit /> Update
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(item._id)} 
                                        className='flex items-center gap-2 text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors text-sm font-semibold'
                                    >
                                        <FaTrash /> Delete
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* QAYBTA MIDIG: SAWIRKA */}
                        {item.img && (
                            <div className='w-48 h-48 p-4 hidden md:block'>
                                <img 
                                    className='w-full h-full object-cover rounded-xl shadow-inner border border-gray-50' 
                                    src={item.img} 
                                    alt={item.title} 
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogList