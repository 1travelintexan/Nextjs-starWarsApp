import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Films() {
  const [films, setFilms] = useState(null);
  useEffect(() => {
    const handleApi = async () => {
      const films = await axios.get("https://swapi.dev/api/films");
      //let characters = await data.json();
      console.log("data", films.data);
      setFilms(films.data.results);
    };
    handleApi();
  }, []);

  return (
    <div className="pages">
      <h1 className="heading">Star Wars | Films</h1>
      {films &&
        films.map((film, i) => {
          return (
            <div key={film.title + i} className="films-container">
              <Link href={`/${film.episode_id}/detail`}>
                <h2 className="links">{film.title}</h2>
              </Link>
              <h4>{film.opening_crawl}</h4>
            </div>
          );
        })}
    </div>
  );
}
