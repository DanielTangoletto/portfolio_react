import { Link } from "react-router-dom";
import PP from "../../assets/photo.png"

function Header() {
  return (
    <header>
      <nav>
        <div className="nav_logo">
          <div className="logo">
            <img className="profile" src={PP} alt="" />
            <p>DANIEL TANGOLETTO</p>
          </div>
          <ul>
            <li>
              <Link to="/portfolio_react/">ACCUEIL</Link>
            </li>
            <li>
            <Link to="/portfolio_react/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/portfolio_react/contact">CONTACT</Link>
            </li>
            <li>
              <Link to="/portfolio_react/projects">PROJECTS</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
