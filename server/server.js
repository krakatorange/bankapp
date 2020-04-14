const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require('cors');

const users = require("./routes/api/users");

const app = express();

const port = process.env.PORT || 5000;
const db = require("./config/keys").mongoURI;

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

mongoose.connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log("MongoDB connected")).catch(err => console.log(err));

app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/api/users", users);

app.listen(port, () => console.log(`Server running on port ${port}`));