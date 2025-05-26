exports.calculateBMR = ({ weight, height, age, gender }) => {
  return gender === 'male'
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;
};

exports.adjustCalories = (bmr, goal, activity) => {
  const factor = { low: 1.2, moderate: 1.55, high: 1.75 }[activity] || 1.2;
  const base = bmr * factor;
  if (goal === 'weight_loss') return base - 500;
  if (goal === 'muscle_gain') return base + 500;
  return base;
};