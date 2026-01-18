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
        <div>

        
        <div className="bg-gray-50 min-h-screen p-6">
            {/* Ciwaanka Sare */}
            <div className="max-w-4xl mx-auto mb-12 mt-6">
                <h1 className="text-4xl font-extrabold text-gray-900 border-b-4 border-purple-500 w-fit pb-2">
                    Our Latest Blogs
                </h1>
                <p className="text-gray-500 mt-2">Ku soo dhawaada qaybta wararka iyo maqaallada SomaliBlog.</p>
            </div>

            {/* Liiska Blog-yada */}
            <div className='max-w-4xl mx-auto flex flex-col gap-8'>
                {
                    BlogList.map((item, index) => {
                        return (
                            <div key={index} className='bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex overflow-hidden group cursor-pointer'>
                                
                                {/* QAYBTA BIDIX: QORAALKA */}
                                <div className='flex-1 p-8 flex flex-col justify-between'>
                                    <div>
                                        {/* Category Tag */}
                                        <span className='bg-purple-50 text-purple-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest'>
                                            {item.category || "General"}
                                        </span>

                                        {/* Title */}
                                        <h2 className='text-2xl font-bold text-gray-800 mt-4 mb-3 group-hover:text-purple-600 transition-colors leading-tight'>
                                            {item.title}
                                        </h2>

                                        {/* Description */}
                                        <p className='text-gray-500 text-sm leading-relaxed line-clamp-3'>
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Footer: Author & Date */}
                                    <div className='mt-8 pt-4 border-t border-gray-50 flex items-center justify-between'>
                                        <div className='flex flex-col'>
                                            <span className='text-sm font-bold text-gray-700'>{item.author}</span>
                                            <span className='text-xs text-gray-400 font-medium'>{item.date}</span>
                                        </div>
                                        <span className="text-purple-500 text-xs font-bold italic">Read More →</span>
                                    </div>
                                </div>

                                {/* QAYBTA MIDIG: SAWIRKA */}
                                {item.img && (
                                    <div className='w-56 h-auto hidden md:block overflow-hidden'>
                                        <img 
                                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' 
                                            src={item.img} 
                                            alt={item.title} 
                                        />
                                    </div>
                                )}
                            </div>
                        )
                    })
                }
            </div>

            {/* Haddii xog la la'yahay */}
            {BlogList.length === 0 && (
                <div className="text-center mt-20 text-gray-400 italic">
                    Weli wax blog ah lama soo dhigin...
                </div>
            )}

               
            
        </div>

        <Footer />

        </div>

        
    )
}



export default Blog