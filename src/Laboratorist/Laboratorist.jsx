import { Link, Outlet } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaPlus } from "react-icons/fa";

const Laboratorist = () => {
    return (
        <div className="w-full  border-2 rounded-sm h-full border-stone-400 ">
        <div >
          <div className="flex items-center bg-[#099635] text-black  gap-6  h-[70px] pl-6 py-1 ">
    
          <div className="flex items-center gap-2 text-white py-2 px-3 text-lg font-semibold border-b-2 border-white ">
          <span><TfiMenuAlt/></span> <Link to="laboratoristList">Laboratorist List</Link>
            </div>
            <div className="flex items-center gap-2 text-white py-2 px-3 text-lg font-semibold border-b-2 border-white ">
            <samp><FaPlus /></samp><Link to="addLaboratorist">Add Laboratorist</Link>
            </div>
           
          </div>
        </div>
        <Outlet></Outlet>
        </div>
    );
};

export default Laboratorist;