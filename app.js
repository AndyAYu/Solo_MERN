// app.js

const express = require('express');
const connectDB = require('./config/db');
// Connect Database
connectDB();
var cors = require('cors');



// routes
const books = require('./routes/api/books');
// const users = require('./routes/api/users');
const app = express();


// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use books
app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
