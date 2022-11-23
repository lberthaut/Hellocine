import Topratedmovies from "./categories/Topratedmovies";
import Trendingmovies from "./categories/Trendingsmovies";
import "../styles/list.css";
import Head from "./Head";

export interface Imovie {
  title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  release_date: string;
  id: number;
  tagline: string;
  budget: number;
}

export interface Idatas {
  datas: [];
  results: Imovie[];
}

export default function Home() {
  return (
    <>
      <Head />
      <Trendingmovies />
      <Topratedmovies />
    </>
  );
}
