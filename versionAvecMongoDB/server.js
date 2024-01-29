const pokeRouter = require("./pokeRouter");
const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const app = express();
if (process.env.NODE_ENV === 'developpment'){
    app.use(morgan("dev"))
}

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api', pokeRouter);

const port = process.env.PORT || 5100

mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;

db.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

app.listen(port, () => {
    console.log(`Server running on PORT ${port}....`);
});



