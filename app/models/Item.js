const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  category: {
    type: String,
    //required: true
  },
  description: {
    type: String,
    //required: true
  }
});

module.exports = mongoose.model("Items", ItemSchema);