import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { IoCreateSharp } from "react-icons/io5";
import { FaListCheck } from "react-icons/fa6";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5"; // Icons dheeraad ah
import CreateBlog from "./CreateBlog"; 
import BlogList from "./BlogList";

function Dashboard() {
    const [activeTab, setActiveTab] = useState("dashboard");

    // Function loogu talagalay in lagu garto badanka la gujiyay
    const navClass = (tab) => `
        flex gap-4 items-center py-3.5 px-6 cursor-pointer rounded-2xl transition-all duration-300 mb-2
        ${activeTab === tab 
            ? "bg-white text-purple-600 shadow-lg shadow-purple-900/20 font-bold scale-105" 
            : "text-white/80 hover:bg-white/10 hover:text-white"
        }
    `;

    return (
        <div className="flex min-h-screen bg-gray-50">
            
            {/* --- SIDEBAR --- */}
            <div className="bg-gradient-to-b from-purple-700 to-purple-900 w-[320px] p-6 flex flex-col shadow-2xl">
                
                {/* Profile Section */}
                <div className="flex flex-col items-center mb-10 pb-10 border-b border-white/10 text-white">
                    <div className="relative">
                        <img className="w-24 h-24 rounded-full border-4 border-white/20 p-1 object-cover" 
                             src="https://i.pinimg.com/736x/ad/80/55/ad8055b13008318ac2402c5af13cb3d1.jpg" alt="Admin" />
                        <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-4 border-purple-700 rounded-full"></span>
                    </div>
                    <div className="text-center mt-4">
                        <h1 className="text-xl font-bold tracking-wide">DRS. Ayaan Ahmed</h1>
                        <p className="text-xs uppercase tracking-widest opacity-60 font-semibold">Senior Admin</p>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1">
                    <div onClick={() => setActiveTab("dashboard")} className={navClass("dashboard")}>
                        <MdDashboard className="text-2xl" />
                        <span className="text-lg">Dashboard</span>
                    </div>

                    <div onClick={() => setActiveTab("create")} className={navClass("create")}>
                        <IoCreateSharp className="text-2xl" />
                        <span className="text-lg">Create Blog</span>
                    </div>

                    <div onClick={() => setActiveTab("list")} className={navClass("list")}>
                        <FaListCheck className="text-2xl" />
                        <span className="text-lg">Blog List</span>
                    </div>
                </nav>

                {/* Bottom Actions */}
                <div className="pt-6 border-t border-white/10">
                    <div className="flex gap-4 items-center py-3 px-6 text-white/60 hover:text-white cursor-pointer transition-colors">
                        <IoSettingsOutline className="text-2xl" />
                        <span>Settings</span>
                    </div>
                    <div className="flex gap-4 items-center py-3 px-6 text-red-300 hover:text-red-100 cursor-pointer transition-colors mt-2">
                        <IoLogOutOutline className="text-2xl" />
                        <span>Logout</span>
                    </div>
                </div>
            </div>

            {/* --- MAIN CONTENT --- */}
            <div className="flex-1 flex flex-col overflow-hidden">
                
                {/* Top Header */}
                <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-10 shadow-sm">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 capitalize">{activeTab} View</h2>
                        <p className="text-sm text-gray-500">Kusoo dhawaaw maamulka SomaliBlog</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <p className="text-sm font-bold text-gray-700">Maanta waa:</p>
                            <p className="text-xs text-gray-500">{new Date().toLocaleDateString('so-SO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <main className="flex-1 overflow-y-auto p-8 bg-gray-50/50">
                    <div className="max-w-7xl mx-auto animate-fadeIn">
                        {activeTab === "dashboard" && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                                    <p className="text-gray-500 font-medium">Wada xogta</p>
                                    <h3 className="text-3xl font-bold text-purple-600">124</h3>
                                </div>
                                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                                    <p className="text-gray-500 font-medium">Views-ka</p>
                                    <h3 className="text-3xl font-bold text-blue-600">12.5k</h3>
                                </div>
                                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                                    <p className="text-gray-500 font-medium">User-ka</p>
                                    <h3 className="text-3xl font-bold text-orange-600">850</h3>
                                </div>
                            </div>
                        )}
                        
                        {activeTab === "create" && <CreateBlog />}
                        {activeTab === "list" && <BlogList />}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;