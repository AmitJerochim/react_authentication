const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express(); // Export app for other routes to use
const router= require('./routes/router');
const port = process.env.PORT || 8000;
const db = require ('./db-manager');
db.connect();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use( (req, res, next) => {console.log(req.body); next()});
// Routes & Handlers
app.use('/', router);
app.listen(port, () => console.log(`Server is listening on port: ${port}`));
