const mongoose = require('mongoose');

// Définir le schéma
const pokemonSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    type: { type: [String], required: true },
});

// Créer le modèle basé sur le schéma
const Pokemon = mongoose.model('pokemon', pokemonSchema);

// Exposer le modèle
module.exports = Pokemon;