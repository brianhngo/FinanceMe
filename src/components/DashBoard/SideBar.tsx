import React, { useState, useEffect } from 'react';
import { auth } from '../../../firebase/firebaseConfig.js';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../store/Transactions.js';
import { logoutUser2 } from '../store/Users.js';
import { logoutUser3 } from '../store/Budgets.js';
import { logoutUser4 } from '../store/Savings.js';
import { logoutUser5 } from '../store/Billings.js';
import { useDispatch } from 'react-redux';
export default function SideBar({ userInfo }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const logoutHander = (event) => {
    signOut(auth)
      .then(() => {
        dispatch(logoutUser());
        dispatch(logoutUser2());
        dispatch(logoutUser3());
        dispatch(logoutUser4());
        dispatch(logoutUser5());
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <nav
      id="logo-sidebar"
      className="w-screen md:fixed md:top-0 md:left-0 md:z-40 md:w-64 md:h-screen md:transition-transform md:-translate-x-full md:translate-x-0"
      aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <div className="flex flex-col mx-auto justify-center items-center text-center">
          <img
            src="/images/HeroBannerImage.png"
            alt="Profile Image"
            className="rounded-full h-48 w-48 object-cover"
          />
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white pb-5">
            Welcome Back,
          </span>
          {/* Switch out Name for actual account users name  */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white pb-5">
            {userInfo ? userInfo.email : null}
          </span>
        </div>
        <div></div>
        <ul className="space-y-2  font-medium">
          <li>
            <a
              href="#"
              className="flex items-center p-2 mt-3 mb-3  text-gray-900 rounded-lg dark:text-white  hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21">
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3 text-lg">Dashboard</span>
            </a>
          </li>

          <li>
            <a
              onClick={logoutHander}
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg mt-3 mb-3 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>

              <span className="flex-1 ms-3 text-lg whitespace-nowrap">
                Sign Out
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
