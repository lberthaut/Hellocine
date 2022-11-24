import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/userprofile.css";

export default function Mypage() {
  const [userDatas, setUserDatas] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    city: "",
    postalCode: "",
    avatar: "",
    birthday: "",
  });
  const navigate = useNavigate();
  const tokenvalue: string | null = sessionStorage.getItem("token");

  function Getaxios() {
    axios
      .get("https://api-ri7.herokuapp.com/api/users/profile", {
        headers: {
          authorization: `Bearer ${tokenvalue}`,
        },
      })
      .then((resp) => {
        setUserDatas(resp.data);
      })
      .catch((error) => console.log("error !", error.response.data));
  }
  useEffect(() => {
    Getaxios();
  }, []);

  function Handleupdate() {
    navigate("/updateprofile");
  }

  function Handleaddmovie() {
    navigate("/addmovie");
  }

  return (
    <>
      <div className="userprofile_container">
        <div className="picprofile_container">
          <img alt="photo profil" src={userDatas.avatar} />
        </div>
        <h2>Prénom</h2>
        <p>{userDatas.firstname}</p>
        <h2>Nom</h2>
        <p>{userDatas.lastname}</p>
        <h2>Ville</h2>
        <p>{userDatas.city}</p>
        <h2>Code Postal</h2>
        <p>{userDatas.postalCode}</p>
        <button className="updateprofile_button" onClick={Handleupdate}>
          Mettre à jour
        </button>
        <button className="addmovie_button" onClick={Handleaddmovie}>
          Ajouter un film
        </button>
      </div>
    </>
  );
}
