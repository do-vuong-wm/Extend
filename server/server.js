const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');

const PORT = process.env.PORT || 3001;
const USERNAME = process.env.DBUSERNAME;
const PASSWORD = process.env.DBPASSWORD;
console.log(USERNAME + ' ' + PASSWORD);
console.log(__dirname);
const app = express();
const router = express();
const api = require('./routes/api');

app.use(bodyParser.json());
app.use(cors());
app.use(logger("dev"));

const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@extendcluster-ala8t.mongodb.net/Extend?retryWrites=true`;

mongoose.connect(
  uri,
  { useNewUrlParser: true}
);

let db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to the database."));

app.use('/api', api)

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
