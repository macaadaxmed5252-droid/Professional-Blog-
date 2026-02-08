import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex-shrink-0 flex items-center group">
                        <div className="bg-gradient-to-tr from-purple-600 to-blue-600 p-2 rounded-xl mr-3 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                            <span className="text-white font-bold text-xl">S</span>
                        </div>
                        <h1 className="text-2xl font-black tracking-tighter text-gray-900 group-hover:text-purple-600 transition-colors">
                            Somali<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Blog</span>
                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-10 items-center">
                        <Link
                            to="/"
                            className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-purple-600 ${isActive("/") ? "text-purple-600 border-b-2 border-purple-600 pb-1" : "text-gray-500"}`}
                        >
                            Explore
                        </Link>
                        <Link
                            to="/dashboard"
                            className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-purple-600 ${isActive("/dashboard") ? "text-purple-600 border-b-2 border-purple-600 pb-1" : "text-gray-500"}`}
                        >
                            Dashboard
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link to="/create" className="hidden sm:block bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-200 transition-all duration-300 active:scale-95">
                            Write Post
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 border-b border-gray-100" : "max-h-0"}`}>
                <div className="px-4 pt-2 pb-6 space-y-2 bg-white">
                    <Link
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-colors ${isActive("/") ? "bg-purple-50 text-purple-600" : "text-gray-500 hover:bg-gray-50"}`}
                    >
                        Explore
                    </Link>
                    <Link
                        to="/dashboard"
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-colors ${isActive("/dashboard") ? "bg-purple-50 text-purple-600" : "text-gray-500 hover:bg-gray-50"}`}
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/create"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest bg-gray-900 text-white text-center sm:hidden"
                    >
                        Write Post
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;