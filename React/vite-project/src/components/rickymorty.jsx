import React, { useEffect, useState } from "react";

export function Morty() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCharacters(data.results); // Aquí asumo que 'results' contiene la lista de personajes
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []); // El segundo argumento [] asegura que useEffect solo se ejecute una vez (equivalente a componentDidMount en clases)

  return (
    <div className="fondo">
      <h1 className="titulo">Lista de personajes:</h1>
      <ul className="container">
        {characters.map((character) => (
          <li key={character.id} className="bordes">
            <img src={character.image} className="imagen" />
            <p className="name">{character.name}</p>
            <p>Gender:{character.gender}</p>
            <p>species:{character.species}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
