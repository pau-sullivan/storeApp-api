
const mongoose = require("mongoose");

 const dbURI = process.env.MONGODB_URI ||
   "mongodb://paula_usr:caracoles@cluster0-shard-00-00-c5od0.mongodb.net:27017,cluster0-shard-00-01-c5od0.mongodb.net:27017,cluster0-shard-00-02-c5od0.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
// const dbURI ='mongodb://localhost/storeapp';

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// require any models

//require("../models/Item");