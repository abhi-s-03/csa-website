
import logo from '../assets/logo.png';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

function Navbars() {
  if (NavbarLink.active === true) {
    NavbarLink.className = 'text-white bg-black rounded-md px-2 py-1';
  }
  return (
    <Navbar fluid rounded className='flex flex-row'>
      <NavbarBrand href="#" className='w-auto'>
        <img src={logo} className="mr-3 h-16" alt="CSA Logo" />
        
      </NavbarBrand>
      <NavbarToggle className='flex justify-end bg-white w-auto hover:bg-transparent  hover:border-transparent focus:ring-transparent outline:none ' />
      <NavbarCollapse className='bg-white '>
        <NavbarLink className='hover:text-slate-400' href="/" >
          Home
        </NavbarLink>
        <NavbarLink className='hover:text-slate-400' href="/events">
          Events
        </NavbarLink>
        
        <NavbarLink className='hover:text-slate-400' href="/dotslash">Dotslash</NavbarLink>
        <NavbarLink className='hover:text-slate-400' href="/team">Team</NavbarLink>

        <NavbarLink className='hover:text-slate-400' href="/contact">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Navbars;