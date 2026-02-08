import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

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

                    <div className="hidden md:flex space-x-10 items-center">
                        <Link
                            to="/"
                            className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-purple-600 ${isActive("/") ? "text-purple-600 border-b-2 border-purple-600 pb-1" : "text-gray-500"}`}
                        >
                            Explore
                        </Link>
                        <Link
                            to="/Dashboard"
                            className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-purple-600 ${isActive("/Dashboard") ? "text-purple-600 border-b-2 border-purple-600 pb-1" : "text-gray-500"}`}
                        >
                            Dashboard
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link to="/create" className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-200 transition-all duration-300 active:scale-95">
                            Write Post
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;