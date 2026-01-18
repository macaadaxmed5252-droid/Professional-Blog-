import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Footer from '../components/Footer'




function Blog() {

    const [BlogList, setBlogList] = useState([])

    




    const DataAPI = async () => {
        axios.get("http://localhost:8080/blog").then((res) => {
            setBlogList(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }


   

    useEffect(() => {
        DataAPI()
    }, [])




    return (
        <>
            <h1  className="text-center  text-5xl font-semibold  pt-4 italic  uppercase">Our Latest Blogs</h1>
            <div className='border-2 border-purple-500 w-[370px] h-[3px] mx-auto mt-2 rounded-xl'> 

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 mt-10 p-4 max-w-6xl mx-auto'>
    {
        BlogList.map((item, index) => {
            return (
                <div key={index} className='bg-white relative  group border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col  '>

                        <img  className='w-[200px] h-[140px] object-cover absolute  right-0 group-hover:scale-105 transition-transform duration-500     ' src={item.img} alt="" />


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

                        

                    </div>

                </div>
            )
        })
    }
</div>

            <Footer />

        </>
    )
}

export default Blog