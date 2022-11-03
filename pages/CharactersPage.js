import axios from "axios";
import { useState, useEffect } from "react";

export default function CharactersPage() {
  const [characters, setCharacters] = useState(null);
  useEffect(() => {
    const handleApi = async () => {
      const characters = await axios.get("https://swapi.dev/api/people/");
      //let characters = await data.json();
      console.log("here", characters.data.results);
      setCharacters(characters.data.results);
    };
    handleApi();
  }, []);
  console.log(characters);
  return (
    <div>
      <h1>Characters</h1>
      {characters &&
        characters.map((char, i) => {
          return (
            <div key={char.name + i}>
              <p>{char.name}</p>
            </div>
          );
        })}
    </div>
  );
}
