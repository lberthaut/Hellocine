import { ReactEventHandler, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icontext, MyContext } from "../app/store/Appcontext";
import "../styles/searchbar.css";
import { Idatas } from "./Home";

export default function Searchbar() {
  const navigate = useNavigate();
  const { searchValue, setSearchValue } = useContext(MyContext) as Icontext;

  return (
    <>
      <form>
        <input
          type="search"
          placeholder="Chercher un film..."
          className="searchbar"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
    </>
  );
}
