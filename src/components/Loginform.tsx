import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { Icontext, MyContext } from "../store/Appcontext";
import Searchedmovies from "./categories/searchedmovies";

interface Ilogin {
  email: string;
  password: string;
}

export default function Loginform() {
  const navigate = useNavigate();
  const [userDatas, setUserDatas] = useState<Ilogin>({
    email: "",
    password: "",
  });
  const { searchValue } = useContext(MyContext) as Icontext;
  // function Postaxios() {
  //   axios
  //     .post("https://api-ri7.herokuapp.com/api/users/login", userDatas)
  //     .then((resp) => {
  //       sessionStorage.setItem("token", resp?.data.token);
  //       navigate("/mypage");
  //     })
  //     .catch((error) => console.log("error !", error.response.data));
  // }

  function Authverification() {
    const parsedlocaluserdatas = JSON.parse(localStorage.getItem("userdatas")!);
    if (
      userDatas.email == parsedlocaluserdatas.email &&
      userDatas.password == parsedlocaluserdatas.password
    ) {
      navigate("/mypage");
    } else {
      alert("Mauvais email ou mot de passe !");
    }
  }

  function Handlesubmit(e: React.FormEvent) {
    e.preventDefault();
    Authverification();
    // Postaxios();
  }

  return searchValue.length > 2 ? (
    <Searchedmovies />
  ) : (
    <>
      <img
        alt="wallpaper"
        src="https://wallpapercave.com/wp/wp4016050.jpg"
        className="login_background"
      />
      <div className="login_container">
        <h2 className="login_title">Se connecter</h2>
        <form className="formlogin" onSubmit={Handlesubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={userDatas?.email}
            onChange={(e) =>
              setUserDatas({ ...userDatas, email: e.target.value })
            }
          />
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={userDatas?.password}
            onChange={(e) =>
              setUserDatas({ ...userDatas, password: e.target.value })
            }
          />
          <button className="login_button">Se Connecter</button>
        </form>
      </div>
      <div className="newuser_block">
        <p>Si vous n'avez pas encore de compte</p>
        <button onClick={() => navigate("/newuser")} className="newuser_button">
          S'enregistrer
        </button>
      </div>
    </>
  );
}
