import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar({ textColor = 'white'}) {
  return (
    <>
      <nav className=" backdrop-filter backdrop-blur-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto py-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex">
              <NavLink className={`flex text-${textColor} hover:bg-gray-500 justify-center align-middle hover:bg-opacity-10 px-5 py-5 rounded-md text-xl`} to="/achievements" activeClassName="active">
                Achievements
              </NavLink>
              <NavLink className={`flex text-${textColor} hover:bg-gray-500 justify-center align-center hover:bg-opacity-10 px-5 py-5 rounded-md text-xl`} to="/newsletter" activeClassName="active">
                Newsletter
              </NavLink>
              <NavLink className={'flex  justify-center align-middle  '} to="/" activeClassName="active">
                <img className='h-16 w-16' src={logo} alt="Logo" />
              </NavLink>
              <NavLink className={`flex text-${textColor} hover:bg-gray-500 justify-center align-middle hover:bg-opacity-10 px-5 py-5 rounded-md text-xl`} to="/dotslash" activeClassName="active">
                DotSlash
              </NavLink>
              <NavLink className={`flex text-${textColor} hover:bg-gray-500 justify-center align-middle hover:bg-opacity-10 px-5 py-5 rounded-md text-xl`} to="/cscup" activeClassName="active">
                CS Cup
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
