// CONNECTING TO THE MONGODB SERVER

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/habit_db');




