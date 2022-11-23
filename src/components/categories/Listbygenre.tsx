import { useEffect, useState } from "react";
import List from "../List";
import { Idatas } from "../Home";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../app/App";

export default function Listbygenre() {
  const [datas, setDatas] = useState<Idatas | null>(null);
  const params = useParams();
  const idURL = `${params.id}`;
  const nameURL = `${params.name}`;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=fr-fr&include_image_language=fr&with_genres=${idURL}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setDatas(data);
      });
  }, []);

  return (
    <>
      <List datas={datas} titlecontainer={nameURL} />
    </>
  );
}
