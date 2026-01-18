import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";



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
        <>
            <h1  className="text-center  text-5xl font-semibold  pt-4 uppercase">Blog List</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 mt-10 p-4'>
    {
        BlogList.map((item, index) => {
            return (
                <div key={index} className='bg-white border relative border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group flex flex-col  '>

                        <img  className='w-[200px] h-[140px] group-hover:scale-105 transition-transform duration-500 absolute  right-0     ' src={item.img} alt="" />


                    <div className='px-5 pt-5'>
                        <span className='bg-purple-100 text-purple-700 text-xs font-bold px-3 py-3 rounded-full upercase '>{item.category || "General"}</span>
                    </div>

                    <div className='p-5 flex-1'> 
                        <h1 className='text-xl font-bold text-gray-800 mb-2 line-clamp-1'>{item.title}</h1>
                        <p className='text-sm text-gray-700 line-clamp-2'>{item.description}</p>
                    </div>

                    <div className='bg-gray-50 px-5 py-3 border-t border-gray-100 flex justify-between items-center text text-gray-500'>
                        <div className='flex flex-col'>
                        <span className='text-xs font-semibold'>{item.author}</span>
                        <span className='text-xs font-semibold'>{item.date}</span>
                        
                        
                        </div>

                        <div className='flex gap-4'>
                        <button  onClick={() => handleDelete(item._id)} className=' flex gap-2 items-center text-xl hover:bg-red-100 hover:duration-500  w-[100px] h-[40px] text-red-500 font-semibold rounded-lg '> <span className='pt-1 pl-1 '><MdDelete /></span> Delete</button>
                            <button onClick={() => navigate(`/update/${item._id}`)} className='flex gap-1 items-center text-xl hover:bg-purple-100 hover:duration-500   w-[100px] h-[40px] text-purple-500 font-semibold rounded-lg  '> <span className='pt-1 pl-1 '><IoIosCreate /> </span> Update</button>
                        </div>

                    </div>

                </div>
            )
        })
    }
</div>

        </>
    )
}

export default BlogList