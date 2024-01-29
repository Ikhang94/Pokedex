const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const cors = require('cors');
const app = express();
if (process.env.NODE_ENV === 'developpment'){
    app.use(morgan("dev"))
}

app.use(cors());
app.use(express.json());

app.get("/api/pokemon/:name", async (req, res) => {

  try {
    
    const {name} = req.params
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = response.data;
    
    //console.log(pokemon)
    res.status(200).json({ pokemon });
  } catch (error) {
    return res.status(404).json({ msg: `No Pokemon with the name` });
  }

})

const port = process.env.PORT || 5100

app.listen(port, () => {
    console.log(`Server running on PORT ${port}....`);
});



