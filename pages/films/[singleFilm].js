import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";

export default function SingleFilm() {
  const router = useRouter();
  const singleFilmId = router.query.singleFilm;
  const [singleFilm, setSingleFilm] = useState(null);
  useEffect(() => {
    const handleApi = async () => {
      const singleFilm = await axios.get(
        `https://swapi.dev/api/planets/${singleFilmId}`
      );
      console.log("data", singleFilm.data);
      setSingleFilm(singleFilm.data);
    };
    handleApi();
  }, [singleFilmId]);
  return (
    <>
      {singleFilm && (
        <>
          <h1>{singleFilm.name}</h1>
          <h3>Population: {singleFilm.population}</h3>
          <h3>Climate: {singleFilm.climate}</h3>
          <h3>Terrain: {singleFilm.terrain}</h3>
          <h3>Gravity: {singleFilm.gravity}</h3>
        </>
      )}
    </>
  );
}
