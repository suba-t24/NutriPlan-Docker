const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  name: String,
  diet: String,
  calories: Number,
  ingredients: [String],
  instructions: String,
  nutrients: {
    protein: String, // e.g., "12g"
    fat: String,
    carbs: String
  }
});

const dailyPlanSchema = new mongoose.Schema({
  day: String,
  meals: [mealSchema],
  totalCalories: Number,
  totalNutrients: {
    protein: String, // summed e.g., "60g"
    fat: String,
    carbs: String
  }
});

const weeklyMealPlanSchema = new mongoose.Schema({
  userEmail: String,
  createdAt: { type: Date, default: Date.now },
  dailyPlans: [dailyPlanSchema],
  totalCaloriesPerDay: Number // This is the target, not actual
});

module.exports = mongoose.model('WeeklyMealPlan', weeklyMealPlanSchema);
