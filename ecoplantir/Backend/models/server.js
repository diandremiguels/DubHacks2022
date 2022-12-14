const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;
const router1 = require('express').Router();
app.use(cors());
app.use(express.json());
const uri = 'mongodb+srv://kritiv:Vaishnavi1234@cluster0.f5j9veu.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const plantRouter = require('./routes/plants');
app.use('/plants', plantRouter);
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
