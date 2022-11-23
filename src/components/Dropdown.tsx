import "../styles/dropdown.css";
import { useEffect, useState } from "react";
import Fetchmovie from "../services/Fetchmovie";

export interface Igenres {
  genres: Igenre[];
}

interface Igenre {
  name: string;
  id: number;
}

export default function Dropdown() {
  const [genres, setGenres] = useState<Igenres | null>(null);
  const listURL = "/genre/movie/list";

  return (
    <>
      <Fetchmovie setDatas={setGenres} URI={listURL} />
      <div className="btn-group dropend">
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle dropdown_button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Genres
        </button>
        <ul className="dropdown-menu dropdown_ul">
          {genres?.genres.map((genre) => (
            <li className="dropdown_li">
              <a
                className="dropdown-item dropdown_link"
                href={`/genre/${genre.name}-${genre.id}`}
                data-id={genre.id}
              >
                {genre.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
