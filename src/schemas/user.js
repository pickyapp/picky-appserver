const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  firstName: String,
  lastName: String,
  userName: String,
  loggedIn: Boolean,
  created: Date,
  friends: [{
    friendId: String
  }]
});

module.exports = mongoose.model('User', userSchema);