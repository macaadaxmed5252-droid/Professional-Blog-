import { useState } from "react";
import { FiGrid, FiPlusCircle, FiList, FiSettings, FiLogOut, FiTrendingUp, FiUsers, FiFileText } from "react-icons/fi";
import CreateBlog from "./CreateBlog";
import BlogList from "./BlogList";

function Dashboard() {
    const [activeTab, setActiveTab] = useState("dashboard");

    const navClass = (tab) => `
        flex gap-4 items-center py-4 px-6 cursor-pointer rounded-2xl transition-all duration-500 mb-2 group
        ${activeTab === tab
            ? "bg-white text-purple-600 shadow-xl shadow-purple-900/20 font-black scale-[1.02]"
            : "text-white/60 hover:bg-white/10 hover:text-white font-bold"
        }
    `;

    return (
        <div className="flex min-h-screen bg-gray-50/50">

            {/* Sidebar */}
            <aside className="bg-gray-900 w-[300px] p-8 flex flex-col shadow-2xl sticky top-0 h-screen z-50">
                <div className="flex items-center gap-3 mb-12 px-2">
                    <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-black">S</span>
                    </div>
                    <h1 className="text-white font-black text-xl tracking-tighter uppercase">Admin Panel</h1>
                </div>

                <div className="flex flex-col items-center mb-10 p-6 rounded-3xl bg-white/5 border border-white/10 text-white">
                    <div className="relative">
                        <img className="w-20 h-20 rounded-2xl border-2 border-white/20 p-1 object-cover"
                            src="https://i.pinimg.com/736x/ad/80/55/ad8055b13008318ac2402c5af13cb3d1.jpg" alt="Admin" />
                        <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-4 border-gray-900 rounded-full"></span>
                    </div>
                    <div className="text-center mt-4">
                        <h2 className="text-sm font-black tracking-tight">DRS. Ayaan Ahmed</h2>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-purple-400 font-black mt-1">Senior Editor</p>
                    </div>
                </div>

                <nav className="flex-1">
                    <div onClick={() => setActiveTab("dashboard")} className={navClass("dashboard")}>
                        <FiGrid className="text-xl" />
                        <span className="text-sm uppercase tracking-widest">Overview</span>
                    </div>

                    <div onClick={() => setActiveTab("create")} className={navClass("create")}>
                        <FiPlusCircle className="text-xl" />
                        <span className="text-sm uppercase tracking-widest">New Story</span>
                    </div>

                    <div onClick={() => setActiveTab("list")} className={navClass("list")}>
                        <FiList className="text-xl" />
                        <span className="text-sm uppercase tracking-widest">Manage All</span>
                    </div>
                </nav>

                <div className="pt-6 border-t border-white/10 space-y-2">
                    <div className="flex gap-4 items-center py-4 px-6 text-white/40 hover:text-white cursor-pointer transition-all font-bold text-sm uppercase tracking-widest">
                        <FiSettings className="text-xl" />
                        <span>Settings</span>
                    </div>
                    <div className="flex gap-4 items-center py-4 px-6 text-red-400/60 hover:text-red-400 cursor-pointer transition-all font-bold text-sm uppercase tracking-widest group">
                        <FiLogOut className="text-xl group-hover:-translate-x-1 transition-transform" />
                        <span>Sign Out</span>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">

                <header className="h-24 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-12 sticky top-0 z-40">
                    <div>
                        <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase">{activeTab}</h2>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">SomaliBlog Insight Engine</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="text-right hidden sm:block">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">System Clock</p>
                            <p className="text-sm font-bold text-gray-900">
                                {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                            </p>
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-12 overflow-y-auto">
                    <div className="max-w-7xl mx-auto">
                        {activeTab === "dashboard" && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                <div className="group bg-white p-8 rounded-[2rem] shadow-xl shadow-purple-900/5 border border-gray-100 hover:border-purple-200 transition-all duration-500">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-4 bg-purple-50 rounded-2xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                                            <FiFileText size={24} />
                                        </div>
                                        <span className="text-green-500 text-xs font-black">+12%</span>
                                    </div>
                                    <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Stories</p>
                                    <h3 className="text-4xl font-black text-gray-900 tracking-tighter">1,248</h3>
                                </div>
                                <div className="group bg-white p-8 rounded-[2rem] shadow-xl shadow-purple-900/5 border border-gray-100 hover:border-blue-200 transition-all duration-500">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                            <FiTrendingUp size={24} />
                                        </div>
                                        <span className="text-green-500 text-xs font-black">+24%</span>
                                    </div>
                                    <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-1">Engagements</p>
                                    <h3 className="text-4xl font-black text-gray-900 tracking-tighter">45.2k</h3>
                                </div>
                                <div className="group bg-white p-8 rounded-[2rem] shadow-xl shadow-purple-900/5 border border-gray-100 hover:border-orange-200 transition-all duration-500">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-4 bg-orange-50 rounded-2xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                                            <FiUsers size={24} />
                                        </div>
                                        <span className="text-orange-500 text-xs font-black">+5%</span>
                                    </div>
                                    <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-1">Subscribers</p>
                                    <h3 className="text-4xl font-black text-gray-900 tracking-tighter">8,902</h3>
                                </div>
                            </div>
                        )}

                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {activeTab === "create" && <CreateBlog />}
                            {activeTab === "list" && <BlogList />}
                            {activeTab === "dashboard" && (
                                <div className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-purple-900/5 text-center">
                                    <h3 className="text-2xl font-black text-gray-900 tracking-tighter uppercase mb-2 text-center">System Overview</h3>
                                    <p className="text-gray-500 font-medium max-w-lg mx-auto mb-5 text-center">Welcome back, Ayaan. The system is operating at peak performance with zero reported latency.</p>
                                    <div className="flex justify-center">
                                        <button onClick={() => setActiveTab("list")} className="bg-gray-900 text-white font-black px-10 py-4 rounded-2xl hover:bg-purple-600 transition-all active:scale-95 text-xs uppercase tracking-widest">
                                            Review Reports
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
