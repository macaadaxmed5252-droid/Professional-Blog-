import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-purple-700 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    
                    {/* Qaybta 1aad: Ku saabsan Website-ka */}
                    <div className="col-span-1 md:col-span-1">
                        <h1 className="text-2xl font-bold text-white mb-4 tracking-tighter">
                            Somali<span className="text-purple-200">Blog</span>
                        </h1>
                        <p className="text-purple-100 text-sm leading-relaxed opacity-90">
                            Waa goobta aad ka heli karto xogta ugu dambeysa ee Tiknoolajiyadda, Caafimaadka, iyo Horumarka. Nagala soco halkan maalin walba.
                        </p>
                    </div>

                    {/* Qaybta 2aad: Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6 border-b border-purple-500 pb-2 w-fit">Quick Links</h3>
                        <ul className="space-y-4 text-purple-100 text-sm">
                            <li className="hover:text-white cursor-pointer transition duration-300">Home</li>
                            <li className="hover:text-white cursor-pointer transition duration-300">About Us</li>
                            <li className="hover:text-white cursor-pointer transition duration-300">Latest Blogs</li>
                            <li className="hover:text-white cursor-pointer transition duration-300">Contact</li>
                        </ul>
                    </div>

                    {/* Qaybta 3aad: Categories */}
                    <div>
                        <h3 className="text-white font-bold mb-6 border-b border-purple-500 pb-2 w-fit">Categories</h3>
                        <ul className="space-y-4 text-purple-100 text-sm">
                            <li className="hover:text-white cursor-pointer transition duration-300">Technology</li>
                            <li className="hover:text-white cursor-pointer transition duration-300">Programming</li>
                            <li className="hover:text-white cursor-pointer transition duration-300">Health</li>
                            <li className="hover:text-white cursor-pointer transition duration-300">Business</li>
                        </ul>
                    </div>

                    {/* Qaybta 4aad: Newsletter */}
                    <div>
                        <h3 className="text-white font-bold mb-6 border-b border-purple-500 pb-2 w-fit">Subscribe</h3>
                        <p className="text-purple-100 text-sm mb-4">Ku biir liiskayaga si aad u hesho wararkii ugu dambeeyay.</p>
                        <div className="flex bg-purple-800 rounded-lg overflow-hidden p-1 border border-purple-500">
                            <input 
                                type="email" 
                                placeholder="Your email" 
                                className="bg-transparent text-white px-4 py-2 w-full focus:outline-none placeholder:text-purple-300"
                            />
                            <button className="bg-white text-purple-700 font-bold px-4 py-2 rounded-md hover:bg-purple-100 transition duration-300">
                                Go
                            </button>
                        </div>
                    </div>
                </div>

                {/* Qaybta Hoose: Social Media & Copyright */}
                <div className="border-t border-purple-500 pt-8 flex flex-col md:flex-row justify-between items-center text-purple-200">
                    <p className="text-xs mb-4 md:mb-0 opacity-80">
                        © 2026 SomaliBlog. All rights reserved. Developed by DRS. Ayaan Ahmed.
                    </p>
                    
                    <div className="flex gap-6">
                        <FaFacebook className="hover:text-white cursor-pointer text-xl transition-all hover:scale-110" />
                        <FaTwitter className="hover:text-white cursor-pointer text-xl transition-all hover:scale-110" />
                        <FaInstagram className="hover:text-white cursor-pointer text-xl transition-all hover:scale-110" />
                        <FaGithub className="hover:text-white cursor-pointer text-xl transition-all hover:scale-110" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;