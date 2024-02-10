import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { LogoutApi } from "../service/ApiCall.jsx";

function NavBar({ user, setUser }) {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = async () => {
    try {
      const res = await LogoutApi();
      localStorage.clear();
      alert(res.data.message);
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="z-10 dark:bg-gray-900 bg-gray-600 text-white  flex justify-between items-center h-16 mx-auto px-4  fixed top-0 w-full">
      {/* Logo */}
      <Link to="/">
        <h1 className="w-full text-3xl sm:text-3xl font-bold text-[#bfe1d4] dark:text-[#00df9a] ml-8">
          Todo App 🖋️
        </h1>
      </Link>
      {/* Desktop Navigation */}
      {!user ? (
        <ul className="hidden md:flex">
          <li
            key="0"
            className="px-4 mx-8 hover:underline duration-300 hover:text-gray-900 hover:rounded-md dark:hover:bg-gray-400 dark:hover:text-gray-900 hover:bg-white cursor-pointer text-center text-2xl"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            key="1"
            className="px-4 mx-8 hover:underline duration-300 hover:text-gray-900 hover:rounded-md dark:hover:bg-gray-400 dark:hover:text-gray-900 hover:bg-white cursor-pointer text-center text-2xl"
          >
            <Link to="/login">SignIn</Link>
          </li>
          <li
            key="3"
            className="px-4 mx-8 hover:underline duration-300 hover:text-gray-900 hover:rounded-md dark:hover:bg-gray-400 dark:hover:text-gray-900 hover:bg-white cursor-pointer text-center text-2xl"
          >
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
      ) : (
        <ul className="hidden md:flex">
          <li
            key="0"
            className="px-4 mx-8 hover:underline duration-300 hover:text-gray-900 hover:rounded-md dark:hover:bg-gray-400 dark:hover:text-gray-900 hover:bg-white cursor-pointer text-center text-2xl"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            key="1"
            className="px-4 mx-8 hover:underline duration-300 hover:text-gray-900 hover:rounded-md dark:hover:bg-gray-400  hover:bg-white dark:hover:text-gray-900 cursor-pointer text-center text-2xl"
          >
            <Link to="/">Profile</Link>
          </li>
          <li
            key="3"
            className="px-4 mx-8 duration-300 hover:text-gray-900 hover:bg-white hover:rounded-md dark:hover:bg-gray-400  cursor-pointer text-center text-2xl"
          >
            <button className="hover:underline" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      )}
      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden mx-8">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* Mobile Navigation Menu */}
      {/* Mobile Navigation Items */}
      {!user ? (
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-16 w-[100%] h-full bg-gray-600 dark:bg-gray-900 ease-linear duration-500 pt-4"
              : "ease-out duration-500 w-[100%] fixed top-0 bottom-0 left-[-100%]"
          }
        >
          <li
            key="0"
            className="p-4 hover:underline duration-300  hover:text-gray-900 dark:hover:text-gray-400 cursor-pointer text-center text-2xl"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            key="1"
            className="p-4 hover:underline duration-300  hover:text-gray-900 dark:hover:text-gray-400 cursor-pointer text-center text-2xl"
          >
            <Link to="/login">SignIn</Link>
          </li>
          <li
            key="2"
            className="p-4 hover:underline duration-300  hover:text-gray-900 dark:hover:text-gray-400 cursor-pointer text-center text-2xl"
          >
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      ) : (
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-16 w-[100%] h-full bg-gray-600 dark:bg-gray-900 ease-linear duration-500 pt-4"
              : "ease-out duration-500 w-[100%] fixed top-0 bottom-0 left-[-100%]"
          }
        >
          <li
            key="0"
            className="p-4 hover:underline duration-300 hover:text-gray-900 dark:hover:text-gray-400 cursor-pointer text-center text-2xl"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            key="1"
            className="p-4 hover:underline duration-300 hover:text-gray-900 dark:hover:text-gray-400 cursor-pointer text-center text-2xl"
          >
            <Link to="/">Profile</Link>
          </li>
          <li
            key="2"
            className="p-4 hover:underline duration-300 hover:text-gray-900 dark:hover:text-gray-400 cursor-pointer text-center text-2xl"
          >
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default NavBar;
