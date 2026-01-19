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
            <h1 className="text-center text-5xl font-semibold pt-4 italic uppercase">Our Latest Blogs</h1>
            <div className='border-2 border-purple-500 w-[370px] h-[3px] mx-auto mt-2 rounded-xl'></div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 p-4 max-w-6xl mx-auto'>
                {
                    BlogList.map((item, index) => {
                        return (
                            <div key={index} className='bg-white group border border-gray-200 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col'>
                                
                                {/* 1. Sawirka oo kor yimid (ka saarney absolute) */}
                                <div className='overflow-hidden h-52 relative'>
                                    <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' src={item.img} alt={item.title} />
                                    
                                    {/* 2. Category oo sawirka dushooda ah meel nuuraysa (Glow effect) */}
                                    <div className='absolute top-4 left-4'>
                                        <span className='bg-purple-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase shadow-[0_0_15px_rgba(147,51,234,0.6)] animate-pulse'>
                                            {item.category || "General"}
                                        </span>
                                    </div>
                                </div>

                                {/* 3. Title iyo Description */}
                                <div className='p-6 flex-1 flex flex-col'>
                                    <h1 className='text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors line-clamp-1'>
                                        {item.title}
                                    </h1>
                                    <p className='text-sm text-gray-600 line-clamp-3 leading-relaxed mb-4'>
                                        {item.description}
                                    </p>
                                    
                                    {/* Footer-ka yar ee card-ka */}
                                    <div className='mt-auto pt-4 border-t border-gray-100 flex justify-between items-center text-gray-400'>
                                        <span className='text-xs font-medium italic'>By {item.author}</span>
                                        <span className='text-[10px]'>{item.date}</span>
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