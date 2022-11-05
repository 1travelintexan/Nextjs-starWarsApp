import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Planets() {
  const [planets, setPlanets] = useState(null);
  useEffect(() => {
    const handleApi = async () => {
      const films = await axios.get("https://swapi.dev/api/planets");
      console.log("data", films.data.results);
      let planetsIdArr = films.data.results.map((planet) => {
        let splitArr = planet.url.split("/");
        let planetId = splitArr[splitArr.length - 2];
        return { name: planet.name, id: planetId };
      });
      console.log(planetsIdArr);
      setPlanets(planetsIdArr);
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
              <Link href={`/films/${planet.id}`}>
                <h2 className="plant-desc">
                  Name: <span className="links">{planet.name}</span>
                </h2>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
