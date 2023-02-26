const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/habit_db');

// const db = mongoose.connection;

// //if error then pritnt message
// db.on('error', console.error.bind(console, 'error in connectin DB'));

// // server is up then run a message 
// db.once('open', () => {
//     console.log('Succesfully !! Connected to the DataBase');
// })
// module.export = db;


