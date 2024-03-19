import {
    Footer,
    FooterIcon,
  } from 'flowbite-react';
  import { BsGithub, BsInstagram, BsTwitter, BsMailbox2, BsLinkedin } from 'react-icons/bs';
  import logo from '../assets/logo.png';
  
  function Footers() {
    return (
      <Footer container>
        <div className="w-full">
          
          <div className="w-full m-0 sm:flex sm:items-center sm:justify-between">
            <div>
                <p className="text-sm text-center sm:text-left">
                    <img src= {logo} alt="CSA Logo" className="h-8 w-8 inline" />
                    &nbsp; College of Engineering Trivandrum
                </p>
            </div>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
             
              <FooterIcon href="https://www.instagram.com/csa_cet/" icon={BsInstagram} />
              <FooterIcon href="#" icon={BsTwitter} />
              <FooterIcon href="https://github.com/csacet" icon={BsGithub} />
              <FooterIcon href="https://www.linkedin.com/company/cs-association-cet/" icon={BsLinkedin} />
              <FooterIcon href="mailto:csa@cet.ac.in" icon={BsMailbox2} />
            </div>
          </div>
        </div>
      </Footer>
    );
  }

    export default Footers;