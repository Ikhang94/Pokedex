import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get(`http://localhost:5100/api/pokemon?limit=20&page=${page}`);
        setPokemonList(prevList => [...prevList, ...response.data]);
      } catch (error) {
        console.error('Error fetching Pokémon list:', error);
      }
    };

    fetchPokemonList();
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <h1>Liste des Pokémon</h1>
      <ul>
        {pokemonList.map(pokemon => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      <button onClick={loadMore}>Charger plus</button>
    </div>
  );
};

export default PokemonList;
