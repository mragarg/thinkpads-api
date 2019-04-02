// I need express
const express = require('express');
// I need express to have its own port
const PORT = 3000;

// Require routers
const thinkpadRouter = require('./routes/thinkpad')

// I need to create an app with express
const app = express();

// I need to connect a router
app.use('/thinkpad', thinkpadRouter)

// I need express to listen on that port
app.listen(PORT, () => {
    console.log(`Running on ${PORT}!`);
});