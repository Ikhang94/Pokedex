import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonCard = ({pokemonName}) => {
  
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5100/api/pokemon/${pokemonName}`);
        setPokemon(response.data.pokemon);
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      }
    };

    fetchPokemonDetails();
  }, [pokemonName]);

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
      {pokemon.sprites && (
        <img src={pokemon.sprites.other['dream_world'].front_default} alt={pokemon.name} />
      )}
    </div>
  );
};


export default PokemonCard;
