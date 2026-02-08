import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import { FiClock, FiUser, FiArrowRight } from 'react-icons/fi';

function Blog() {
    const [BlogList, setBlogList] = useState([]);
    const [loading, setLoading] = useState(true);

    const DataAPI = async () => {
        try {
            const res = await axios.get("http://localhost:8080/blog");
            if (res.data && Array.isArray(res.data)) {
                setBlogList(res.data);
            } else {
                setBlogList([]);
            }
        } catch (err) {
            console.error("API Error:", err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        DataAPI();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50/50">
            {/* Hero Section */}
            <header className="bg-white pt-20 pb-16 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <span className="bg-purple-100 text-purple-700 text-xs font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6 inline-block">
                        Featured Content
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter">
                        Stay ahead of the <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Curve.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-500 font-medium leading-relaxed">
                        Discover the latest insights, tutorials, and stories from the Somali tech community and beyond.
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-20">
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mb-4"></div>
                        <p className="text-gray-500 font-bold animate-pulse">Gathering stories...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {Array.isArray(BlogList) && BlogList.length > 0 ? (
                            BlogList.map((item) => (
                                <article key={item._id} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            src={item.img || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop'}
                                            alt={item.title}
                                        />
                                        <div className="absolute top-5 left-5">
                                            <span className="bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-wider shadow-sm">
                                                {item.category || "General"}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="flex items-center gap-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                                            <div className="flex items-center gap-1.5 focus:text-purple-600">
                                                <FiUser className="text-purple-500" />
                                                {item.author || 'Admin'}
                                            </div>
                                            <span>•</span>
                                            <div className="flex items-center gap-1.5">
                                                <FiClock className="text-blue-500" />
                                                {item.date || 'Jan 1, 2024'}
                                            </div>
                                        </div>

                                        <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors line-clamp-2 leading-tight">
                                            {item.title}
                                        </h2>

                                        <p className="text-gray-500 font-medium line-clamp-3 leading-relaxed mb-8 flex-1">
                                            {item.description}
                                        </p>

                                        <div className="pt-6 border-t border-gray-50 flex justify-between items-center group/btn">
                                            <span className="text-sm font-bold text-purple-600 flex items-center gap-2 group-hover/btn:translate-x-2 transition-transform duration-300 pointer-events-none">
                                                Read Fully <FiArrowRight />
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-100">
                                <p className="text-xl font-bold text-gray-400 italic">No stories found yet. Be the first to write one!</p>
                            </div>
                        )}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}

export default Blog;
