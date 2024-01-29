const pokemon = require("./pokeModel");
const async = require ("express-async-errors")

// let poke = [
//     { id: 1, name: 'Bulbasaur', type: ["grass", "poison"]},
//     { id: 2, name: 'Ivysaur', type: ["grass", "poison"]},
//     { id: 3, name: 'Venusaur', type: ["grass", "poison"]},
//     { id: 4, name: 'Charmander', type: ["fire"] },
//     { id: 5, name: 'Charmeleon', type: ["fire"] },
//     { id: 6, name: 'Charizard', type: ["fire", "flying"] },
//     { id: 7, name: 'Squirtle', type: ["water"] },
//     { id: 8, name: 'Wartortle', type: ["water"] },
//     { id: 9, name: 'Blastoise', type: ["water"] },
// ]

const getAllPokeapp = async  (req, res) => {
    const poke = await pokemon.find({})
    res.status(200).json({ poke });
};

const getPokeByName = async (req, res) => {
    const { name } = req.params;
    const poke = await pokemon.find({ name: name });
    if (!pokemon) {
        return res.status(404).json({ msg: `No Pokemon with the name ${name}` });
    }
    res.status(200).json({ poke });
};

const getPokeByType = async (req, res) => {
    let { type } = req.params;
    type = type.toLowerCase();
    const pokemonsOfType = await pokemon.find({type : type});
    if (pokemonsOfType.length === 0) {
        return res.status(404).json({ msg: `No Pokemon with type ${type}` });
    }
    res.status(200).json({ pokemonsOfType });
};

const createPokemon = async (req, res) => {

    const { id, name, type } = req.body;
    const poke = await pokemon.create({  id, name, type });
    res.status(201).json({ poke });

};

module.exports = {
    getAllPokeapp,
    getPokeByName,
    getPokeByType,
    createPokemon
};

