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

// app.listen(5000, () => {
//     console.log('Server listening on port 5000');
// });

const server = app.listen(5000, () => {
    console.log("Server is listening on port 5000")
})

const io = require('socket.io')(server);
const jwt = require('jwt-then');

io.use(async (socket, next) => {
    try {
        const token = socket.handshake.query.token;
        const payload = await jwt.verify(token, process.env.SECRET);

        socket.userId = payload.id;

        next();
    } catch (err) {

    }
})

io.use('connection', (socket) => {
    console.log('Connected')

    socket.on('disconnect', () => {
        console.log('Disconnected')
    })
})