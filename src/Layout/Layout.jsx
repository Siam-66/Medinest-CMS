import { Outlet } from "react-router-dom";
import Sidebar from "../Navbar/Sidebar";

const Layout = () => {
    return (
        <div className=" flex max-w-7xl mx-auto">
            <div className="h-screen bg-green-700 font-bold p-20 text-white">
           <Sidebar></Sidebar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;