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
        `https://swapi.dev/api/films/${singleFilmId}`
      );

      console.log("single film", singleFilm.data);
      setSingleFilm(singleFilm.data);
    };
    handleApi();
  }, [singleFilmId]);
  return (
    <div id="single-film-container">
      {singleFilm && (
        <div id="single-film">
          <h1>{singleFilm.title}</h1>
          <h3>{singleFilm.opening_crawl}</h3>
          <div className="flex">
            <h1>Producer:</h1> <h3>{singleFilm.producer}</h3>
          </div>
          <div className="flex">
            <h1>Release Date:</h1> <h3>{singleFilm.release_date}</h3>
          </div>
        </div>
      )}
    </div>
  );
}
