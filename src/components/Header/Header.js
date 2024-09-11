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
              <Link to="/">ACCUEIL</Link>
            </li>
            <li>
            <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <li>
              <Link to="/projects">PROJECTS</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
