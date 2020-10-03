const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import cors package
app.use(require('cors')());

// setup error handlers
const errorHandlers = require('./handlers/errorHandlers');
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongooseErrors);

// import routes
app.use("/user", require("./routes/user"));
app.use("/chatroom", require("./routes/chatroom"));

if (process.env.ENV === 'DEVELOPMENT') {
    app.use(errorHandlers.developmentErrors);
} else {
    app.use(errorHandlers.productionErrors);
}

module.exports = app;