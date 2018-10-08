// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var ItemCategorySchema   = new mongoose.Schema({
  name: String,
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});

// Sets the created_at parameter equal to the current time
ItemCategorySchema.pre('save', function(next){
	this.created_at =  new Date();
    next();
});

// Sets the updated_at parameter equal to the current time
ItemCategorySchema.pre('update', function(next){
    this.update({},{ $set: { updated_at: new Date() } });
    next();
});


// Export the Mongoose model
module.exports = mongoose.model('ItemCategory', ItemCategorySchema);