import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">


                    <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-2xl font-bold text-blue-600 tracking-tight"> Somali<span className="text-gray-900">Blog</span> </h1>
                    </div>
                    <div className="flex space-x-8 items-center">
                        <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition duration-150 ease-in-out">Blog </Link> 

                        <Link to="/Dashboard" className="text-gray-600 hover:text-blue-600 font-medium transition duration-150 ease-in-out"> Dashboard </Link>

                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Header;