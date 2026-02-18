import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { IoAddOutline } from "react-icons/io5";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({ isDarkMode, isLoggedIn }) => {
  
  return (
    <nav className="w-full h-22 flex items-center justify-between px-6 bg-accent shadow border-solid border-b-1 border-b-amber-700 rounded-b-lg mb-4">
      <Link to="/">
        <h1 className="font-bold text-[#494949] text-md md:text-lg lg:text-xl">Json Placeholder</h1>
      </Link>
      <div className="flex items-center gap-6 pr-4 md:pr-16 lg:pr-24">
        {isDarkMode ? (
          <DarkModeOutlinedIcon className="w-6 h-6 ml-8 text-[#494949]" />
        ) : (
          <LightModeOutlinedIcon className="w-6 h-6 ml-8 text-[#494949]" />
        )}
        {isLoggedIn ? (
          <div className="flex flex-row">
          <Link to="/createPost" className="font-kaushan ml-2 md:ml-6 lg:ml-8 px-6 py-2 bg-light text-xl text-[#494949] rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 flex items-center justify-center"><IoAddOutline className="text-[#494949] w-6 h-6 size-1.5" /> Post</Link>
          <Link to="/myPosts" className="font-kaushan ml-2 md:ml-6 lg:ml-8 px-6 py-2 bg-light text-xl text-[#494949] rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 flex items-center justify-center">My Posts</Link>
          <IoPersonCircleSharp className="w-12 h-12 ml-8 text-[#494949]" />
          </div>
        ) : (
          <Link to="/login" className="font-kaushan ml-2 md:ml-6 lg:ml-8 px-6 py-2 bg-light text-xl text-[#494949] rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 flex items-center justify-center">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
