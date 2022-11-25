import { useContext, useEffect, useState } from "react";
import { Icontext, MyContext } from "../../store/Appcontext";
import List from "../List";
import { Idatas } from "../Home";
import { API_KEY } from "../../app/App";

export default function Searchedmovies() {
  const { searchValue } = useContext(MyContext) as Icontext;
  const [datas, setDatas] = useState<Idatas | null>(null);
  const searchedTitle = `Recherche de films`;

  useEffect(() => {
    if (searchValue.length > 0) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=fr-FR&query=${searchValue}`
      )
        .then((resp) => resp.json())
        .then((data) => {
          setDatas(data);
        });
    }
  }, [searchValue]);

  return (
    <>
      <List datas={datas} titlecontainer={searchedTitle} />
    </>
  );
}
