import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { v4 } from "uuid";

export default function Films() {
  const [films, setFilms] = useState(null);
  useEffect(() => {
    const handleApi = async () => {
      const films = await axios.get("https://swapi.dev/api/films");
      let filmsIdArr = films.data.results.map((film) => {
        let splitArr = film.url.split("/");
        let filmId = splitArr[splitArr.length - 2];
        return { title: film.title, id: filmId, opening: film.opening_crawl };
      });
      console.log("films", filmsIdArr);
      setFilms(filmsIdArr);
    };
    handleApi();
  }, []);

  return (
    <div className="pages">
      <h1 className="heading">Star Wars | Films</h1>
      {films &&
        films.map((film, i) => {
          return (
            <div key={v4()} className="films-container">
              <Link href={`films/${film.id}/`}>
                <h2 className="links">{film.title}</h2>
              </Link>
              <h4>{film.opening}</h4>
            </div>
          );
        })}
    </div>
  );
}
