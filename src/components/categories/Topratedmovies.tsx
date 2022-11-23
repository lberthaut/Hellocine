import { useState } from "react";
import Fetchmovie from "../../services/Fetchmovie";
import List from "../List";
import { Imovie } from "../Home";
import { Idatas } from "../Home";

export default function Topratedmovies() {
  const [datas, setDatas] = useState<Idatas | null>(null);
  const topratedTitle = "Films les mieux notés ever";
  const topratedURL = "/movie/top_rated";

  return (
    <>
      <Fetchmovie setDatas={setDatas} URI={topratedURL} />
      <List datas={datas} titlecontainer={topratedTitle} />
    </>
  );
}
