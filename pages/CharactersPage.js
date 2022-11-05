import axios from "axios";
import { useState, useEffect } from "react";

export default function CharactersPage() {
  const [characters, setCharacters] = useState(null);
  useEffect(() => {
    const handleApi = async () => {
      const characters = await axios.get("https://swapi.dev/api/people/");
      //let characters = await data.json();
      console.log("Characters", characters.data.results);
      setCharacters(characters.data.results);
    };
    handleApi();
  }, []);

  return (
    <div>
      <h1 className="heading">Star Wars | Characters:</h1>
      {characters &&
        characters.map((char, i) => {
          return (
            <div key={char.name + i}>
              <h3 className="character">{char.name}</h3>
            </div>
          );
        })}
    </div>
  );
}
