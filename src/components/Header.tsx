import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import "../styles/header.css";
import Dropdown from "./Dropdown";
import Searchbar from "./Searchbar";
import { Icontext, MyContext } from "../app/store/Appcontext";

export default function Header() {
  const logo = "./assets/logo.png";
  const { searchValue, setSearchValue } = useContext(MyContext) as Icontext;

  function Handlereset() {
    setSearchValue("");
  }

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
                onClick={Handlereset}
              />
            </NavLink>
            <Dropdown />
          </div>
          <div className="searchbar_block">
            <Searchbar />
          </div>
          <div className="pages_links login_link">
            <NavLink
              className="nav-link link"
              to="/login"
              onClick={Handlereset}
            >
              Login
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
