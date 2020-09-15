// server file // 

require('dotenv').config();

// database
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error: ' + err.message);
});

mongoose.connection.once('open', () => {
    console.log('MongoDB connected!')
});

// import models
require('./models/User');
require('./models/Chat');
require("./models/Message");

const app = require('./app');

app.listen(5000, () => {
    console.log('Server listening on port 5000');
});

