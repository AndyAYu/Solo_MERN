const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/user-routes')
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const User = require('./models/User');


const app = express();

// Init Middleware
app.use(cookieParser());
app.use(cors());
app.use(express.json({ extended: false }));
app.use('/api', router)

//Register and Login Routes
app.post('/register', async (req, res) => {
    //hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create a new user
    const newUser = new User({
        // username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    });

    //save user and send response
    try {
        const user = await newUser.save();

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

mongoose
    .connect(
        "mongodb+srv://solo_mern:Solo5502!@cluster0.4z2ybt2.mongodb.net/Solo-MERN?retryWrites=true&w=majority"
    )
    .then(() => {
        app.listen(8081);
        console.log("MongoDB is connected! Listening to localhost 8081")
    })
    .catch((err) => console.log(err));

// cors
// app.use(cors({ origin: true, credentials: true }));

// app.get('/', (req, res) => res.send('Hello world!'));

// app.listen(port, () => console.log(`Server running on port ${port}`));
