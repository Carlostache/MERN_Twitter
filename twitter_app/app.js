const express = require('express');
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const User = require('./models/User');
const bodyParser = require('body-parser');


mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log(err))

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {

    console.log(res);
    res.send("Hello World");
});

app.use("/api/users", users);
app.use("/api/tweets", tweets)

const port = process.env.PORT || 5001;

app.listen(port, () => {console.log(`Listening on port ${port}`)});
