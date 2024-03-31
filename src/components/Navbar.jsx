import logo from "../assets/logo.png";
import "./styles/navbar.css";
function Navbars() {
  return (
    <>
      <div className="navbar">
        <div className="nav-items">
          <a href="#">Achievements</a>
          <a href="#">Newsletter</a>
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
          <a href="#">Dotslash</a>
          <a href="#">CS Cup</a>
        </div>
      </div>
    </>
  );
}

export default Navbars;
