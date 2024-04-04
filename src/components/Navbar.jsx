import logo from "../assets/logo.png";
import "./styles/navbar.css";
function Navbars() {
  return (
    <>
      <div className="navbar">
        <div className="nav-items">
          <a href="/achievements">Achievements</a>
          <a href="/newsletter">Newsletter</a>
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
          <a href="/dotslash">Dotslash</a>
          <a href="/cscup">CS Cup</a>
        </div>
      </div>
    </>
  );
}

export default Navbars;
