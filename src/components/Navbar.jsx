import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import './styles/navbar.css';

function Navbars() {
  return (
    <>
      <div className="navbar">
        <div className="nav-items">
          <NavLink to="/achievements" activeClassName="active">
            Achievements
          </NavLink>
          <NavLink to="/newsletter" activeClassName="active">
            Newsletter
          </NavLink>
          <NavLink to="/" activeClassName="active">
            <img src={logo} alt="Logo" />
          </NavLink>
          <NavLink to="/dotslash" activeClassName="active">
            Dotslash
          </NavLink>
          <NavLink to="/cscup" activeClassName="active">
            CS Cup
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbars;