import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar({ textColor }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="backdrop-filter backdrop-blur-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto py-5 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16 ">
            <div className=" items-center hidden md:flex">
              <NavLink
                className={`flex ${textColor ? `text-${textColor}` : 'text-white'} hover:bg-gray-500 justify-center align-middle hover:bg-opacity-10 px-5 py-5 rounded-md text-xl`}
                to="/achievements"
                activeClassName="active"
              >
                Achievements
              </NavLink>
              <NavLink
                className={`flex ${textColor ? `text-${textColor}` : 'text-white'} hover:bg-gray-500 justify-center align-center hover:bg-opacity-10 px-5 py-5 rounded-md text-xl`}
                to="/newsletter"
                activeClassName="active"
              >
                Newsletter
              </NavLink>
              <NavLink className={'flex  justify-center align-middle  '} to="/" activeClassName="active">
                <img className="h-16 w-16" src={logo} alt="Logo" />
              </NavLink>
              <NavLink
                className={`flex ${textColor ? `text-${textColor}` : 'text-white'} hover:bg-gray-500 justify-center align-middle hover:bg-opacity-10 px-5 py-5 rounded-md text-xl`}
                to="/dotslash"
                activeClassName="active"
              >
                DotSlash
              </NavLink>
              <NavLink
                className={`flex ${textColor ? `text-${textColor}` : 'text-white'} hover:bg-gray-500 justify-center align-middle hover:bg-opacity-10 px-5 py-5 rounded-md text-xl`}
                to="/cscup"
                activeClassName="active"
              >
                CS Cup
              </NavLink>
            </div>
            {/* Mobile Menu Button */}
            <div className="mx-10 flex md:hidden">
              <button
                onClick={toggleMobileMenu}
                className={`text-white hover:text-gray-500 focus:outline-none`}
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMobileMenuOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zM4 11h16a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM4 17h16a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 5h16a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2zm16 6H4a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zm0 6H4a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                className={`block ${textColor ? `text-${textColor}` : 'text-white'} hover:bg-gray-500 justify-center align-middle hover:bg-opacity-10 px-5 py-5 rounded-md text-xl`}
                to="/achievements"
                activeClassName="active"
                onClick={toggleMobileMenu}
              >
                Achievements
              </NavLink>
              <NavLink
                className={`block ${textColor ? `text-${textColor}` : 'text-white'} hover:bg-gray-500 justify-center align-center hover:bg-opacity-10 px-5 py-5 rounded-md text-xl`}
                to="/newsletter"
                activeClassName="active"
                onClick={toggleMobileMenu}
              >
                Newsletter
              </NavLink>
              <NavLink
                className={`block ${textColor ? `text-${textColor}` : 'text-white'} hover:bg-gray-500 justify-center align-middle hover:bg-opacity-10 px-5 py-5 rounded-md text-xl`}
                to="/dotslash"
                activeClassName="active"
                onClick={toggleMobileMenu}
              >
                DotSlash
              </NavLink>
              <NavLink
                className={`block ${textColor ? `text-${textColor}` : 'text-white'} hover:bg-gray-500 justify-center align-middle hover:bg-opacity-10 px-5 py-5 rounded-md text-xl`}
                to="/cscup"
                activeClassName="active"
                onClick={toggleMobileMenu}
              >
                CS Cup
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;

