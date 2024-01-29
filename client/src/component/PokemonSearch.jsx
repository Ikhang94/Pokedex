// PokemonSearch.js
import React, { useState } from 'react';
import PokemonCard from './PokemonCard';

const PokemonSearch = () => {
  const [pokemonName, setPokemonName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mettez à jour l'état pour déclencher le rendu du composant PokemonDetails avec le nouveau nom de Pokémon
    setPokemonName(pokemonName.toLowerCase());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Rechercher un Pokémon:
          <input
            type="text"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
          />
        </label>
        <button type="submit">Rechercher</button>
      </form>
      {/* Affichez le composant PokemonDetails avec le nom du Pokémon à rechercher */}
      {pokemonName && <PokemonCard pokemonName={pokemonName} />}
    </div>
  );
};

export default PokemonSearch;
