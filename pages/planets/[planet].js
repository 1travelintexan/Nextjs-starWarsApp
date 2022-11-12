import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Planet() {
  const router = useRouter();
  const planetId = router.query.planet;
  const [planet, setPlanet] = useState(null);
  useEffect(() => {
    const handleApi = async () => {
      const planet = await axios.get(
        `https://swapi.dev/api/planets/${planetId}`
      );
      console.log("planet", planet.data);
      setPlanet(planet.data);
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
