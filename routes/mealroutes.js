const express = require('express');
const router = express.Router();
const { generateMealPlan, regenerateMealPlan } = require('../controllers/mealController');

// Properly mapped routes to match frontend
router.post('/generate-plan', generateMealPlan);
router.post('/regenerate-plan', regenerateMealPlan);

module.exports = router;
