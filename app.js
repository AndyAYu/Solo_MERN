const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/user-routes')
const cookieParser = require('cookie-parser');

const app = express();

// Init Middleware
app.use(cookieParser());
app.use(express.json({ extended: false }));
app.use('/api', router)
mongoose
    .connect(
        "mongodb+srv://solo_mern:Solo5502!@cluster0.4z2ybt2.mongodb.net/Solo-MERN?retryWrites=true&w=majority"
    )
    .then(() => {
        app.listen(8082);
        console.log("MongoDB is connected! Listening to localhost 8082")
    })
    .catch((err) => console.log(err));

// cors
// app.use(cors({ origin: true, credentials: true }));

// app.get('/', (req, res) => res.send('Hello world!'));

// use books
// app.use('/api/books', books);

// app.listen(port, () => console.log(`Server running on port ${port}`));
