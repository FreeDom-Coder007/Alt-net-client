import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../../Assets/logo/logo.png';
import { AuthContext } from "../../context/AuthContextProvider";

const Header = () => {
  const {logOut, user} = useContext(AuthContext)
  console.log(user)

  const handleLogOut = () => {
    logOut()
    .then(result => {
       const user = result.user
    })
    .catch(error => console.log(error.message))
  }

  return (
    <div className="header bg-gradient-to-r from-black/10 via-black/20 to-black/25">
      <nav className="px-2 sm:px-4 py-2.5 rounded w-10/12 mx-auto">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to='/'><div className="w-28 flex items-center"><img className="w-full" src={logo} alt="" /><span className="text-white text-2xl font-semibold">AltNet</span></div></Link>
          <div className="flex md:order-2">
            { user?.uid ? 
              <>
              <Link to="/add-packages"><button className="btn bg-blue-700 mr-2">Add services</button></Link>
              <Link to={`/my_reviews/${user.uid}`}><button className="btn bg-blue-700 mr-2">My reviews</button></Link>
              <button onClick={handleLogOut} type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">LogOut</button>
              </>
              :
              <>
              <Link to="/signup" className=" mr-4"><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button></Link>
              <Link to="/login"><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">LogIn</button></Link>
              </>
            }
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd">
                </path>
              </svg>
            </button>
            <div className="avatar ml-4">
             <div className="w-12 rounded-full">
              <img title={user?.displayName} src={user ? user.photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fQ4vDOJu1OTLr-lmPtQJw60FwODB-mMUrpSCMZxXnM73d9e5YDClVHZCRuFzK7Md_DI&usqp=CAU"} alt=""/>
             </div>
            </div>
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-cta">
            <ul className="flex flex-col p-4 mt-4 rounded-lg borde md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <Link to='/' className="block py-2 pr-4 pl-3 text-white text-lg font-bold bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link className="block py-2 pr-4 pl-3 text-white rounded text-lg font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  About
                </Link>
              </li>
              <li>
                <Link to='/packages' className="block py-2 pr-4 pl-3 text-white rounded text-lg font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="block py-2 pr-4 pl-3 text-white rounded text-lg font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Blog
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
