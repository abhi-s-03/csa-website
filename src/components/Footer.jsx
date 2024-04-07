import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "./styles/footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-info">
          <p className="footer-text">College of Engineering Trivandrum</p>
        </div>
        <div className="footer-social">
          <a
            href="https://www.instagram.com/csa_cet/"
            className="footer-social-link"
          >
            <BsInstagram size={24} />
          </a>
          <a href="mailto:csa@cet.ac.in" className="footer-social-link">
            <MdEmail size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/cs-association-cet/"
            className="footer-social-link"
          >
            <BsLinkedin size={24} />
          </a>
          <a href="https://github.com/csacet" className="footer-social-link">
            <BsGithub size={24} />
          </a>
        </div>
      </div>
      <div className="line"></div>
      <div className="copyright">
        <p>@2024 CSA</p>
      </div>
    </footer>
  );
}

export default Footer;
