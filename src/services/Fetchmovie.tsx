import { useEffect } from "react";
import { API_KEY } from "../app/App";
import { Igenres } from "../components/Dropdown";
import { Imovie } from "../components/Home";
import { Idatas } from "../components/Home";
import { Ivideos } from "../components/Moviedetails";

interface Isetdataprops {
  setDatas:
    | ((data: []) => void)
    | ((data: Idatas | null) => void)
    | ((data: Imovie | null) => void)
    | ((data: Ivideos | null) => void)
    | ((data: Igenres | null) => void);
  URI: string;
}

export default function Fetchmovie(props: Isetdataprops) {
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3${props.URI}?api_key=${API_KEY}&language=fr-fr&include_image_language=fr`
    )
      .then((resp) => resp.json())
      .then((data) => {
        props.setDatas(data);
        console.log(data);
      });
  }, []);

  return <></>;
}
