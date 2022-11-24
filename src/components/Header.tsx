import { NavLink } from "react-router-dom";
import "../styles/header.css";
import Dropdown from "./Dropdown";
import Searchbar from "./Searchbar";

export default function Header() {
  const logo = "./assets/logo.png";
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="header_block">
            <NavLink className="navbar-brand logo_link" to="/Hellocine">
              <img
                alt="logo"
                src="https://www.pngmart.com/files/12/Funny-Donkey-PNG-Transparent-Image.png"
                className="logo"
              />
            </NavLink>
            <Dropdown />
          </div>
          <div className="searchbar_block">
            <Searchbar />
          </div>
          <div className="pages_links login_link">
            <NavLink className="nav-link link" to="/login">
              Login
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
