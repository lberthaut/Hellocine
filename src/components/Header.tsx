import { NavLink } from "react-router-dom";
import React from "react";
import "../styles/header.css";
import Dropdown from "./Dropdown";

export default function Header() {
  const logo = "./assets/logo.png";
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="header_block">
            <NavLink className="navbar-brand logo_link" to="/">
              <img
                alt="logo"
                src="https://www.pngmart.com/files/12/Funny-Donkey-PNG-Transparent-Image.png"
                className="logo"
              />
            </NavLink>
            <Dropdown />
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
