import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar(): React.FC {
  const navigate = useNavigate();
  const [openNavbar, setOpenNavbar] = useState(false);

  const toggleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  return (
    <nav className=" dark:bg-gray-900 w-full fixed z-20 top-0 start-0 border-b border-gray-200">
      <div className=" ml-4 mr-4 flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Left Side  */}
        <a
          onClick={() => navigate('/')}
          className="flex items-center space-x-3">
          <img src="/images/Logo.png" className="mt-2 w-28 h-28" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            FinanceMe
          </span>
        </a>
        {/* Right Side */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="key-features"
                className="block text-lg py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page">
                {' '}
                Menu{' '}
              </a>
            </li>
            {/* <li>
              <a
                href="#"
                className="block text-lg py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                page2
              </a>
            </li> */}
          </ul>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 ">
          <button
            onClick={() => navigate('/login')}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={openNavbar ? 'true' : 'false'}>
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
