require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const corsFilter = require('./middleware/cors-filter.middleware');

// CONSTANTS
const PORT = parseInt(process.env.SERVER_PORT);

// SERVER INSTANCE
const app = express();

// MIDDLEWARE
app.use(bodyParser.json());
app.use(corsFilter);

// ROUTERS


// CATCH-ALL 400
app.use('/', (req, res) => {
  res.sendStatus(400);
});

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});