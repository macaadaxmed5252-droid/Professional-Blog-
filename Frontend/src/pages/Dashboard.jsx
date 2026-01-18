import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { IoCreateSharp } from "react-icons/io5";
import { FaListCheck } from "react-icons/fa6";
import CreateBlog from "./CreateBlog"; 
import BlogList from "./BlogList";

function Dashboard() {
    
    const [activeTab, setActiveTab] = useState("dashboard");

    return (
        <div className="flex">
            
            <div className="bg-purple-400 h-[100] w-[350px] p-5">
                <div className="flex gap-3 items-center mb-10 text-white">
                    <img className="w-[70px] h-[70px] rounded-full border-2 border-green-500" 
                         src="https://i.pinimg.com/736x/ad/80/55/ad8055b13008318ac2402c5af13cb3d1.jpg" alt="" />
                    <div>
                        <h1 className="text-xl font-bold">DRS. Ayaan Ahmed</h1>
                        <p className="opacity-80">Admin of SomaliBlog</p>
                    </div>
                </div>

                
                <div  className="flex gap-2 py-3 text-white hover:bg-white hover:text-black cursor-pointer rounded-[50px] pl-5 mb-4 duration-300">
                    <MdDashboard className="text-4xl" />
                    <h1 className="text-2xl font-semibold">Dashboard</h1>
                </div>

                <div onClick={() => setActiveTab("create")} 
                     className="flex gap-2 py-3 text-white hover:bg-white hover:text-black cursor-pointer rounded-[50px] pl-5 mb-4 duration-300">
                    <IoCreateSharp className="text-4xl" />
                    <h1 className="text-2xl font-semibold">Create Blog</h1>
                </div>

                <div onClick={() => setActiveTab("list")} className="flex gap-2 py-3 text-white hover:bg-white hover:text-black cursor-pointer rounded-[50px] pl-5 duration-300">
                    <FaListCheck className="text-4xl" />
                    <h1 className="text-2xl font-semibold">Blog List</h1>
                </div>
            </div>

            
            <div className="flex-1 p-10 bg-gray-100">
                {activeTab === "create" && <CreateBlog />}
                {activeTab === "list" && <BlogList />}
               
            </div>

        </div>
    );
}

export default Dashboard;