const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  age: Number,
  height: Number,
  weight: Number,
  gender: String,
  dietType: String,
  allergies: [String],
  mealsPerDay: Number,
  goal: String,
  activityLevel: String
});

module.exports = mongoose.model('User', userSchema);
