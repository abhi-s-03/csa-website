import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import cetlogo from '../assets/images/cetlogo.png';
import "./styles/footer.css";

function Footer() {
  return (
    <div className="bg-black text-white h-fit p-8 footer">
      <div className="flex flex-row justify-between items-center mx-auto my-0 p-4">
        <div className="flex flex-col items-start text-left">
          <div className="w-[90%] text-left mb-4 flex">
            <img className="h-7 w-7 m-auto" src={cetlogo} alt="Logo" />
            <p className="text-base m-4 footer-text">College of Engineering Trivandrum</p>
          </div>
          <div className="flex text-left mb-4 space-x-5">
            <a
              href="https://www.instagram.com/csa_cet/"
              className="text-[#ccc] transition-[color] duration-[0.3s] hover:text-white max-w-6"
            >
              <BsInstagram size={22} />
            </a>
            <a href="mailto:csa@cet.ac.in" className="text-[#ccc] transition-[color] duration-[0.3s] hover:text-white max-w-6">
              <MdEmail size={26} />
            </a>
            <a
              href="https://www.linkedin.com/company/cs-association-cet/"
              className="text-[#ccc] transition-[color] duration-[0.3s] hover:text-white max-w-6"
            >
              <BsLinkedin size={20} />
            </a>
            <a href="https://github.com/csacet" className="text-[#ccc] transition-[color] duration-[0.3s] hover:text-white max-w-6">
              <BsGithub size={20} />
            </a>
          </div>
          <div className="w-1/5 h-px bg-[#ffffff5c] ml-0 my-0"></div>
          <div className="text-[0.8rem] text-left mx-0 my-4">
            <p>@ 2024 CSA</p>
          </div>
        </div>
        <div className="flex flex-col ">
          <div>
            LINKS
          </div>
          <a href="/document.pdf" target="_blank" rel="noopener noreferrer">
            Final Year Porject Titles
          </a>
        </div>

        
      </div>
      
    </div>
  );
}

export default Footer;
