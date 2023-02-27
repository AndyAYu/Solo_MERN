const express = require('express');
const mongoose = require('mongoose');
// const router = require('./routes/user-routes')
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const User = require('./models/User');
const jwt = require('jsonwebtoken');


const app = express();

// Init Middleware
app.use(cookieParser());
app.use(cors());
app.use(express.json({ extended: false }));
// app.use('/api', router)

// register endpoint
app.post("/register", (request, response) => {
  // hash the password


  bcrypt
  .genSalt(10)
  .then((genSalt) => {
    bcrypt
    .hash(request.body.password, genSalt)
    .then((hashedPassword) => {
      console.log(hashedPassword)
      // create a new user instance and collect the data
      const user = new User({
        email: request.body.email,
        password: hashedPassword,
      });
      // save the new user
      user
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        // catch error if the new user wasn't added successfully to the database
        .catch((error) => {
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    // catch error if the password hash isn't successful
    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
  });
});

// login endpoint
app.post("/login", (request, response) => {
  // check if email exists
  User.findOne({ email: request.body.email })
    // if email exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(request.body.password, user.password)
        .catch((error) => {
          response.status(400).send({
            message: "Error comparing passwords",
            error,
          });
        })
        // if the passwords match
        .then((passwordCheck) => {
          // check if password matches
          if(!passwordCheck) {
            return response.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }

          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          //   return success response
          response.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
          });
        })
        // catch error if jwt token not created
        .catch((error) => {
          response.status(400).send({
            message: "JWT token not created",
            error,
          });
        });
    })
});

//logout endpoint
app.get("/logout", (request, response) => {
  response.clearCookie("token");
  response.status(200).send({
    message: "Logout Successful",
  });
});

// connect to MongoDB
mongoose
    .set("strictQuery", false)
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
