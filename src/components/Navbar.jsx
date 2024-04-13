import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar({ textColor }) {

  const toggle = () => {
    const nav = document.getElementById('nav');
    if (nav.classList.contains('hidden')) {
      nav.classList.remove('hidden');
      nav.classList.add('flex');
    }
    else {
      nav.classList.add('hidden');
      nav.classList.remove('flex');
    }
  }

  return (
    <>
    <div  className=" w-full fixed  z-10 md:hidden">
      
      <button>
        <svg onClick={toggle} className="w-16 h-16 text-gray-900 p-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={textColor}>
          <path className="text-gray-900" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>

        
      </button>

  <div id='nav' class=" hidden absolute top-1/2 left-1/4 z-10 mt-5  w-50 max-w-max -translate-x-1/2 px-2">
    <div class="w-50 max-w-md flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
      <div class="p-4">
        <div class="group relative flex justify-center align-middle gap-x-6 rounded-lg p-4 hover:underline">
          
          <NavLink className={`font-semibold text-gray-900 `} to="/newsletter" activeClassName="active">
                Newsletter
            </NavLink>
          </div>
        <div class="group relative flex justify-center align-middle gap-x-6 rounded-lg p-4 hover:underline">
          
          <div>
          <NavLink className={`font-semibold text-gray-900 `} to="/achievements" activeClassName="active">
                Acheivements
            </NavLink>
          </div>
        </div>
        <div class="group relative flex justify-center align-middle gap-x-6 rounded-lg p-4 hover:underline">
          
          <div>
          <NavLink className={`font-semibold text-gray-900 `} to="/" activeClassName="active">
                Home
            </NavLink>
          </div>
        </div>
        <div class="group relative flex justify-center align-middle gap-x-6 rounded-lg p-4 hover:underline">
          
          <div>
          <NavLink className={`font-semibold text-gray-900 `} to="/dotslash" activeClassName="active">
                DotSlash
            </NavLink>
          </div>
        </div>
        <div class="group relative flex justify-center align-middle gap-x-6 rounded-lg p-4 hover:underline">
          
          <div>
          <NavLink className={`font-semibold text-gray-900 `} to="/cscup" activeClassName="active">
                CS Cup
            </NavLink>
          </div>
        </div>
        
      </div>
      
    </div>
  </div>

      </div>
     
      <nav className=" backdrop-filter backdrop-blur-lg fixed w-full z-10 hidden md:block">
        <div className="max-w-7xl mx-auto py-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex">
              <NavLink className={`font-sans flex text-${textColor} hover:bg-gray-500 justify-center align-middle hover:bg-opacity-10 px-5 py-5 rounded-md text-xl`} to="/achievements" activeClassName="active">
                Achievements
              </NavLink>
              <NavLink className={`font-sans flex text-${textColor} hover:bg-gray-500 justify-center align-center hover:bg-opacity-10 px-5 py-5 rounded-md text-xl`} to="/newsletter" activeClassName="active">
                Newsletter
              </NavLink>
              <NavLink className={'flex  justify-center align-middle  '} to="/" activeClassName="active">
                <img className='h-16 w-16' src={logo} alt="Logo" />
              </NavLink>
              <NavLink className={`font-sans  flex text-${textColor} hover:bg-gray-500 justify-center align-middle hover:bg-opacity-10 px-5 py-5 rounded-md text-xl`} to="/dotslash" activeClassName="active">
                DotSlash
              </NavLink>
              <NavLink className={`font-sans flex text-${textColor} hover:bg-gray-500 justify-center align-middle hover:bg-opacity-10 px-5 py-5 rounded-md text-xl`} to="/cscup" activeClassName="active">
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
