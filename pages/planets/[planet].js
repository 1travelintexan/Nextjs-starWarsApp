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
        <>
          <h1>{planet.name}</h1>
          <h3>Population: {planet.population}</h3>
          <h3>Climate: {planet.climate}</h3>
          <h3>Terrain: {planet.terrain}</h3>
          <h3>Gravity: {planet.gravity}</h3>
        </>
      )}
    </>
  );
}
