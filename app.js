// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');


// routes
const books = require('./routes/api/books');
const User = require('./models/User');
const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use books
app.use('/api/books', books);

// use users
// app.use(require('./routes'))

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

app.post("/register", async (req, res) => {
    // Check to make sure the email provided not registered
    const ( email, password, )
    User.findOne({ email: req.body.email }).then((user => {
        if (user) {
            //Throw a 400 error if the email address already exists
            return res.status(400).json({ email: "A user has already registered with this"})
        } else {
            // Otherwise create a new user
            const newUser = new User({
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password,
            });
            newUser.save()
            return res.status(200).json({msg: newUser})
        }
    }));
});