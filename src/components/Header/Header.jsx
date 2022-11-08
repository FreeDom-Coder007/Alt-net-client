import React from "react";
import { Link } from "react-router-dom";
import logo from '../../Assets/logo/logo.png'

const Header = () => {
  return (
    <div className="header bg-gradient-to-r from-black/10 via-black/20 to-black/25">
      <nav class="px-2 sm:px-4 py-2.5 rounded w-10/12 mx-auto">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <Link to='/'><div className="w-28 flex items-center"><img className="w-full" src={logo} alt="" /><span className="text-white text-2xl font-semibold">AltNet</span></div></Link>
          <div class="flex md:order-2">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-cta">
            <ul class="flex flex-col p-4 mt-4 rounded-lg borde md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <Link class="block py-2 pr-4 pl-3 text-white text-lg font-bold bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link class="block py-2 pr-4 pl-3 text-white rounded text-lg font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  About
                </Link>
              </li>
              <li>
                <Link class="block py-2 pr-4 pl-3 text-white rounded text-lg font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Services
                </Link>
              </li>
              <li>
                <Link class="block py-2 pr-4 pl-3 text-white rounded text-lg font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
