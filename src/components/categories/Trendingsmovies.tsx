import { useState } from "react"
import Fetchmovie from "../../services/Fetchmovie"
import List from "../List";
import { Imovie } from "../Home";
import { Idatas } from "../Home";


export default function Trendingmovies() {
    const [datas, setDatas] = useState<Idatas | null>(null)
    const trendingTitle = "Films tendance de la semaine"
    const trendingURL = '/trending/movie/week'


    return (
        <>
            <Fetchmovie setDatas={setDatas} URI={trendingURL} />
            <List datas={datas} titlecontainer={trendingTitle} />
        </>)
}