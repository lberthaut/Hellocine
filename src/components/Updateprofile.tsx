import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Iupdate {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  city: string;
  postalCode: string;
  avatar: string;
  birthday: string;
}

export default function Updateprofile() {
  const [userDatas, setUserDatas] = useState<Iupdate>({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    city: "",
    postalCode: "",
    avatar: "",
    birthday: "",
  });
  const tokenvalue: string | null = sessionStorage.getItem("token");
  const navigate = useNavigate();

  function Updateaxios() {
    axios
      .put("https://api-ri7.herokuapp.com/api/users/profile", userDatas, {
        headers: {
          Authorization: `Bearer ${tokenvalue}`,
        },
      })
      .then((resp) => console.log("response", resp))
      .catch((err) => console.log("error", err));
  }

  function Handlesubmit(e: React.FormEvent) {
    e.preventDefault();
    Updateaxios();
    navigate("/mypage");
  }

  return (
    <>
      <div className="updateprofie_container">
        <form className="formnewuser" onSubmit={Handlesubmit}>
          <label htmlFor="firstname">Prénom</label>
          <input
            type="text"
            id="firstname"
            value={userDatas?.firstname}
            onChange={(e) =>
              setUserDatas({ ...userDatas, firstname: e.target.value })
            }
          />
          <label htmlFor="lastname">Nom</label>
          <input
            type="text"
            id="lastname"
            value={userDatas?.lastname}
            onChange={(e) =>
              setUserDatas({ ...userDatas, lastname: e.target.value })
            }
          />
          <label htmlFor="city">Ville</label>
          <input
            type="text"
            id="city"
            value={userDatas?.city}
            onChange={(e) =>
              setUserDatas({ ...userDatas, city: e.target.value })
            }
          />
          <label htmlFor="postalCode">Code postal</label>
          <input
            type="text"
            id="postalCode"
            value={userDatas?.postalCode}
            onChange={(e) =>
              setUserDatas({ ...userDatas, postalCode: e.target.value })
            }
          />
          <label htmlFor="avatar">Lien d'une photo</label>
          <input
            type="text"
            id="avatar"
            value={userDatas?.avatar}
            onChange={(e) =>
              setUserDatas({ ...userDatas, avatar: e.target.value })
            }
          />
          <label htmlFor="birthday">Date d'anniversaire</label>
          <input
            type="date"
            id="birthday"
            value={userDatas?.birthday}
            onChange={(e) =>
              setUserDatas({ ...userDatas, birthday: e.target.value })
            }
          />
          <button type="submit">Valider !</button>
        </form>
      </div>
    </>
  );
}
