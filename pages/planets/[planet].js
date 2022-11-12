import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Planet() {
  const router = useRouter();
  const planetId = router.query.planet;
  const [planet, setPlanet] = useState(null);
  useEffect(() => {
    const handleApi = async () => {
      const data = await fetch(`https://swapi.dev/api/planets/${planetId}`, {
        method: "GET",
      });
      const planet = await data.json();
      setPlanet(planet);
    };
    handleApi();
  }, [planetId]);
  return (
    <>
      {planet && (
        <div id="single-planet">
          <h1 id="planet-name">{planet.name}</h1>
          <div className="flex">
            <h1 className="single-planet-h1">Population:</h1>{" "}
            <h3>{planet.population}</h3>
          </div>
          <div className="flex">
            <h1 className="single-planet-h1">Climate:</h1>{" "}
            <h3>{planet.climate}</h3>
          </div>
          <div className="flex">
            <h1 className="single-planet-h1">Terrain:</h1>{" "}
            <h3>{planet.terrain}</h3>
          </div>
          <div className="flex">
            <h1 className="single-planet-h1">Gravity:</h1>{" "}
            <h3> {planet.gravity}</h3>
          </div>
        </div>
      )}
    </>
  );
}
