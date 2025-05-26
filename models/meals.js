const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  diet: String,
  allergies: [String],
  calories: Number,
  ingredients: [String],
  nutrients: {
    protein: String,
    fat: String,
    carbs: String
  },
  instructions: String
});

module.exports = mongoose.model('Meal', mealSchema);