import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Iaddmovie {
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
}

export default function Addmovie() {
  const [movieDatas, setMovieDatas] = useState<Iaddmovie>({
    title: "",
    overview: "",
    release_date: "",
    poster_path: "",
  });
  const navigate = useNavigate();
  const tokenvalue: string | null = sessionStorage.getItem("token");

  function Postaxios() {
    axios
      .post("https://api-ri7.herokuapp.com/api/movies", movieDatas, {
        headers: {
          Authorization: `Bearer ${tokenvalue} `,
        },
      })
      .then((resp) => {
        console.log("resp", resp);
      })
      .catch((error) => console.log("error !", error));
  }

  function Handlesubmit(e: React.FormEvent) {
    Postaxios();
    navigate("/mypage");
  }

  return (
    <>
      <div className="addmovie_container">
        <form className="formnewuser" onSubmit={Handlesubmit}>
          <label htmlFor="title">Titre du film</label>
          <input
            type="text"
            id="title"
            value={movieDatas?.title}
            onChange={(e) =>
              setMovieDatas({ ...movieDatas, title: e.target.value })
            }
          />
          <label htmlFor="overview">Résumé</label>
          <input
            type="text"
            id="overview"
            value={movieDatas?.overview}
            onChange={(e) =>
              setMovieDatas({ ...movieDatas, overview: e.target.value })
            }
          />
          <label htmlFor="release_date">Date de sortie</label>
          <input
            type="date"
            id="release_date"
            value={movieDatas?.release_date}
            onChange={(e) =>
              setMovieDatas({ ...movieDatas, release_date: e.target.value })
            }
          />
          <label htmlFor="poster_path">Lien de l'affiche</label>
          <input
            type="text"
            id="poster_path"
            value={movieDatas?.poster_path}
            onChange={(e) =>
              setMovieDatas({ ...movieDatas, poster_path: e.target.value })
            }
          />
        </form>
        <button className="addmovie_button">Ajouter un film</button>
      </div>
    </>
  );
}
