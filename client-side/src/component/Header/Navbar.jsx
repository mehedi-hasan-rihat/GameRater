import React, { useContext, useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { Tooltip } from "react-tooltip";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import { IoIosMenu } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
export default function Navbar() {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const listItem = (
    <>
      <li className="">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-blue-400 border border-gray-200 focus:text-white focus:bg-blue-400"
              : "border dark:text-white  border-gray-200 rounded-md text-black"
          }
        >
          <p className="p-1">Home</p>
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/reviews"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-blue-400 border border-gray-200 focus:text-white focus:bg-blue-400"
              : "border border-gray-200 rounded-md text-black dark:text-white"
          }
        >
          <p className="p-1">All Reviews</p>
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/addReview"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-blue-400 border border-gray-200 focus:text-white focus:bg-blue-400"
              : "border border-gray-200 rounded-md text-black dark:text-white"
          }
        >
          <p className="p-1">Add Review</p>
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/myReviews"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-blue-400 border border-gray-200 focus:text-white focus:bg-blue-400"
              : "border border-gray-200 rounded-md text-black dark:text-white"
          }
        >
          <p className="p-1">My Reviews</p>
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/myWatchlist"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-blue-400 border border-gray-200 focus:text-white focus:bg-blue-400"
              : "border border-gray-200 rounded-md text-black dark:text-white"
          }
        >
          <p className="p-1">WatchList</p>
        </NavLink>
      </li>
    </>
  );

  // Theme Controller

  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("theme");
    console.log(savedData);
    if (savedData === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      setDark(true);
      console.log(dark);
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      setDark(false);
      console.log(dark);
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    document.body.classList.toggle("dark", newDark);
    document.body.classList.toggle("light", !newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  return (
    <div className="navbar dark:bg-slate-800 shadow-md p-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="bg-white dark:bg-gray-300 mr-2 rounded-sm p-1 lg:hidden"
          >
            <IoIosMenu className="text-black " />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2 dark:bg-black"
          >
            {listItem}
          </ul>
        </div>
        <a className="text-xl bg-white dark:bg-gray-300 w-max p-2 rounded-md hidden sm:block">
          <img className="w-28 object-fill h-4" src={Logo} alt="Logo" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{listItem}</ul>
      </div>

      <div className="navbar-end gap-5 items-center">
        {/* <input
          type="checkbox"
          value="synthwave"
          onChange={toggleTheme}
          className="toggle theme-controller"
        /> */}


       <div className="p-1 dark:bg-gray-300 rounded-full"> {
          dark ? <CiLight className="text-gray-500 text-3xl" onClick={toggleTheme}/>  : <MdDarkMode className="text-gray-500 text-3xl" onClick={toggleTheme}/>

        }</div>

        {user ? (
          <div className="flex items-center justify-center gap-2  z-50">
            <img
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user.displayName}
              data-tooltip-place="top"
              className="w-10 h-10 rounded-full object-cover "
              src={user?.photoURL}
              alt="user"
              referrerPolicy="no-referrer"
            />
            <Tooltip id="my-tooltip" className="z-50" />
            <button
              onClick={() => {
                logOut();
                navigate("/");
              }}
              className="btn border-cyan-400 dark:text-black dark:bg-gray-300
              "
            >
              LogOut
            </button>
          </div>
        ) : (
          <div className="flex gap-2 items-center justify-center">
            <Link
              to="/auth/login"
              className="btn border-cyan-400 dark:text-black dark:bg-gray-300"
            >
              Login
            </Link>
            <Link
              to="/auth/registration"
              className="btn border-cyan-400 dark:text-black dark:bg-gray-300"
            >
              Registration
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
