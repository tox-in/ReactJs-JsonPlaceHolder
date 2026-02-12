import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";

const Navbar = ({ isDarkMode, isLoggedIn }) => {
  return (
    <nav className="w-full h-22 flex items-center justify-between px-6 bg-accent shadow border-solid border-b-1 border-b-amber-700 rounded-b-lg mb-4">
      <Link to="/">
        <h1 className="font-bold text-[#494949]">Json Placeholder</h1>
      </Link>
      <div className="flex items-center gap-6 pr-4 md:pr-16 lg:pr-24">
        {isDarkMode ? (
          <DarkModeOutlinedIcon className="w-6 h-6 ml-8 text-[#494949]" />
        ) : (
          <LightModeOutlinedIcon className="w-6 h-6 ml-8 text-[#494949]" />
        )}
        {isLoggedIn ? (
          <PersonOutlineOutlinedIcon className="w-6 h-6 ml-8 text-[#494949]" />
        ) : (
          <Link to="/login">
            <p className="font-kaushan w-12 h-6 ml-8 text-[#494949] bg-light">Login</p>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
