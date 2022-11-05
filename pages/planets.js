import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Planets() {
  const [planets, setPlanets] = useState(null);
  useEffect(() => {
    const handleApi = async () => {
      const films = await axios.get("https://swapi.dev/api/planets");
      //let characters = await data.json();
      console.log("data", films.data);
      setPlanets(films.data.results);
    };
    handleApi();
  }, []);

  return (
    <div className="pages">
      <h1 className="heading">Star Wars | Planets</h1>
      {planets &&
        planets.map((planet, i) => {
          return (
            <div key={planet.title + i} className="planets-container">
              <Link href={`/detail`}>
                <h2 className="plant-desc">
                  Name: <span className="links">{planet.name}</span>
                </h2>
              </Link>
              <h2 className="plant-desc">
                Climate: <span className="links">{`"${planet.climate}"`}</span>
              </h2>
            </div>
          );
        })}
    </div>
  );
}
