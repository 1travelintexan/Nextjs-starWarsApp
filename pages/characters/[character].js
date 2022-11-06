import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Character() {
  const router = useRouter();
  const characterId = router.query.character;
  const [character, setCharacter] = useState(null);
  useEffect(() => {
    const handleApi = async () => {
      const character = await axios.get(
        `https://swapi.dev/api/people/${characterId}`
      );
      console.log("character", character.data);
      setCharacter(character.data);
    };
    handleApi();
  }, [characterId]);
  return (
    <>
      {character && (
        <>
          <h1>{character.name}</h1>
          <h3>Height: {character.height}cm</h3>
          <h3>Weight: {character.mass}kg</h3>
          <h3>Gender: {character.gender}</h3>
          <h3>Hair Color: {character.hair_color}</h3>
          <h3>Eye Color: {character.eye_color}</h3>
        </>
      )}
    </>
  );
}
