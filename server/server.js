const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const morgan = require('morgan');
const app = express();
if (process.env.NODE_ENV === 'developpment'){
    app.use(morgan("dev"))
}

app.use(express.json());

let poke = [
    { id: 1, name: 'Bulbasaur', type: ["grass", "poison"]},
    { id: 2, name: 'Ivysaur', type: ["grass", "poison"]},
    { id: 3, name: 'Venusaur', type: ["grass", "poison"]},
    { id: 4, name: 'Charmander', type: ["fire"] },
    { id: 5, name: 'Charmeleon', type: ["fire"] },
    { id: 6, name: 'Charizard', type: ["fire", "flying"] },
    { id: 7, name: 'Squirtle', type: ["water"] },
    { id: 7, name: 'Wartortle', type: ["water"] },
    { id: 7, name: 'Blastoise', type: ["water"] },
]


app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/poke', (req, res) => {
    res.status(200).json({poke});
})

app.get('/api/poke/:name', (req, res) => {
  const { name } = req.params;
  const pokemon = poke.find((poke) => poke.name.toLowerCase() === name.toLowerCase());
  if (!pokemon) {
      return res.status(404).json({ msg: `No Pokemon with the name ${name}` });
  }
  res.status(200).json({ pokemons: pokemon });
});

app.get('/api/type/:type', (req, res) => {
  let { type } = req.params;
  type = type.toLowerCase();
  const pokemonsOfType = poke.filter((pokemon) => pokemon.type.includes(type));
  if (pokemonsOfType.length === 0) {
      return res.status(404).json({ msg: `No Pokemon with type ${type}` });
  }
  res.status(200).json({ pokemons: pokemonsOfType });
});

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: 'something went wrong' });
});

const port = process.env.PORT || 5100

app.listen(port, () => {
  console.log('server running on PORT 5100');
});

