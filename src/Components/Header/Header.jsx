/* eslint-disable react/no-unknown-property */
import { MdAccountCircle } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div className="container mx-auto mt-6 w-[90vw]">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipies</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl text-[#150B2B] font-bold">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#150B2BB2] text-[16px] font-normal ml-24">
            <li>
              <a>Home</a>
            </li>
            <li><a>Recipies</a> </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
            
        </div>
        <div className="navbar-end">
          <div className="hidden md:flex items-center bg-[#F3F3F4] p-2 rounded-[50px] mr-2 gap-2">
          <FaSearch className=" text-[17px]" />
          <input type="text" placeholder="Search" className="bg-[#F3F3F4] text-[#150B2BB2]"/>
          </div>
          <a className=" text-4xl text-[#0BE58A]"><MdAccountCircle /></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
