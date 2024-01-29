const express = require('express');
const router = express.Router();

const pokeController = require ('./pokeController'); // Ne spécifiez pas l'extension .js

router.route('/poke').get(pokeController.getAllPokeapp);
router.route('/poke/:name').get(pokeController.getPokeByName);
router.route('/type/:type').get(pokeController.getPokeByType);
router.post('/create', pokeController.createPokemon);

module.exports = router;