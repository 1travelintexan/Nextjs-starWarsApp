import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { v4 } from "uuid";

export default function CharactersPage() {
  const [characters, setCharacters] = useState(null);
  useEffect(() => {
    const handleApi = async () => {
      const data = await fetch("https://swapi.dev/api/people/", {
        method: "GET",
      });
      const characters = await data.json();

      let charactersArr = characters.results.map((character) => {
        let splitArr = character.url.split("/");
        let characterId = splitArr[splitArr.length - 2];
        return { name: character.name, id: characterId };
      });
      console.log(charactersArr);
      setCharacters(charactersArr);
    };
    handleApi();
  }, []);

  return (
    <div>
      <h1 className="heading">Star Wars | Characters:</h1>
      {characters &&
        characters.map((char) => {
          return (
            <div key={v4()} id="characters">
              <Link href={`/characters/${char.id}`}>
                <h3 className="character">{char.name}</h3>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
