// CONNECTING TO THE MONGODB SERVER

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URL)
    .then(console.log("Connected"))
    .catch((err) => console.log(err));




