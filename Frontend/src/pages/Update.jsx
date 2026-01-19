import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'; // Soo dhowayso SweetAlert2

function Update() {
    const { id } = useParams();
    const navigate = useNavigate(); 

    const [Blog, setBlog] = useState({
        title: "",
        description: "",
        date: "",
        author: "",
        category: "",
        img: ""
    });

    const handlehange = (e) => {
        setBlog({
            ...Blog,
            [e.target.name]: e.target.value
        });
    }

    const hadnlesubmit = async (e) => {
        e.preventDefault();
        
        // Muuji Loading inta ay xogtu diramayso
        Swal.fire({
            title: 'Hadda weey socotaa...',
            text: 'Fadlan sug inta xogta la cusuboneynayo',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        try {
            await axios.put(`http://localhost:8080/blog/${id}`, Blog);

            // Haddii ay guulaysato
            Swal.fire({
                title: "Waa lagu guulaystay!",
                text: "Xogta si guul leh ayaa loo cusuboneeyay.",
                icon: "success",
                confirmButtonColor: "#9333ea" // midabka purple-kaaga
            }).then(() => {
                navigate(-1);
            });

        } catch (err) {
            console.log(err);
            // Haddii ay cilad dhacdo
            Swal.fire({
                title: "Cilad ayaa dhacday!",
                text: "Ma suurtagalin in xogta la beddelo, fadlan dib u tijaabi.",
                icon: "error",
                confirmButtonColor: "#ef4444"
            });
        }
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
        <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
            <div className="max-w-xl w-full p-8 bg-white border border-gray-100 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-purple-700 border-b-2 border-purple-100 pb-3">   Update Blog Content </h2>

                <form onSubmit={hadnlesubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-1">Title</label>
                        <input type="text" name="title" value={Blog.title} onChange={handlehange} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:border-purple-500 focus:ring-2 focus:ring-purple-50 outline-none transition-all" />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-1">Description</label>
                        <textarea name="description" value={Blog.description} onChange={handlehange} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:border-purple-500 focus:ring-2 focus:ring-purple-50 outline-none h-28 resize-none transition-all" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-600 mb-1">Date</label>
                            <input type="text" name="date" value={Blog.date} onChange={handlehange} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:border-purple-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-600 mb-1">Author</label>
                            <input type="text" name="author" value={Blog.author} onChange={handlehange} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:border-purple-500 outline-none" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-600 mb-1">Category</label>
                            <input type="text" name="category" value={Blog.category} onChange={handlehange} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:border-purple-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-600 mb-1">Image URL</label>
                            <input type="text" name="img" value={Blog.img} onChange={handlehange} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:border-purple-500 outline-none" />
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-purple-600 text-white font-bold py-3.5 rounded-xl hover:bg-purple-700 shadow-lg shadow-purple-100 transition-all active:scale-95" >
                        Update Blog
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Update;