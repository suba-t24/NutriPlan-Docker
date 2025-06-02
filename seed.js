
const mongoose = require('mongoose');
const Meal = require('./models/meals');

mongoose.connect(process.env.MONGO_URI).then(async () => {
  console.log("Connected to MongoDB");

  const meals = [
  {
    "name": "Paleo Power Meal 101",
    "diet": "paleo",
    "allergies": [
      "soy"
    ],
    "calories": 558,
    "ingredients": [
      "egg",
      "spinach",
      "coconut oil",
      "carrots",
      "zucchini"
    ],
    "nutrients": {
      "protein": "17g",
      "fat": "30g",
      "carbs": "86g"
    },
    "instructions": "Combine egg, spinach, coconut oil, carrots and add zucchini. Cook and serve."
  },
  {
    "name": "Vegetarian Power Meal 102",
    "diet": "vegetarian",
    "allergies": [
      "gluten"
    ],
    "calories": 568,
    "ingredients": [
      "broccoli",
      "yogurt",
      "eggs",
      "mushrooms",
      "banana"
    ],
    "nutrients": {
      "protein": "20g",
      "fat": "16g",
      "carbs": "20g"
    },
    "instructions": "Combine broccoli, yogurt, eggs, mushrooms and add banana. Cook and serve."
  },
  {
    "name": "Vegan Power Meal 103",
    "diet": "vegan",
    "allergies": [
      "soy"
    ],
    "calories": 719,
    "ingredients": [
      "quinoa",
      "brown rice",
      "avocado",
      "tofu",
      "spinach"
    ],
    "nutrients": {
      "protein": "36g",
      "fat": "11g",
      "carbs": "31g"
    },
    "instructions": "Combine quinoa, brown rice, avocado, tofu and add spinach. Cook and serve."
  },
  {
    "name": "Paleo Power Meal 104",
    "diet": "paleo",
    "allergies": [
      "shellfish"
    ],
    "calories": 674,
    "ingredients": [
      "coconut oil",
      "beef",
      "zucchini",
      "almond flour",
      "berries"
    ],
    "nutrients": {
      "protein": "14g",
      "fat": "20g",
      "carbs": "86g"
    },
    "instructions": "Combine coconut oil, beef, zucchini, almond flour and add berries. Cook and serve."
  },
  {
    "name": "Balanced Power Meal 105",
    "diet": "balanced",
    "allergies": [],
    "calories": 802,
    "ingredients": [
      "toast",
      "whole wheat wrap",
      "rice",
      "cucumber",
      "hummus"
    ],
    "nutrients": {
      "protein": "21g",
      "fat": "21g",
      "carbs": "90g"
    },
    "instructions": "Combine toast, whole wheat wrap, rice, cucumber and add hummus. Cook and serve."
  },
  {
    "name": "Paleo Power Meal 106",
    "diet": "paleo",
    "allergies": [
      "nuts",
      "soy"
    ],
    "calories": 704,
    "ingredients": [
      "zucchini",
      "almond flour",
      "beef",
      "coconut oil",
      "carrots"
    ],
    "nutrients": {
      "protein": "37g",
      "fat": "12g",
      "carbs": "65g"
    },
    "instructions": "Combine zucchini, almond flour, beef, coconut oil and add carrots. Cook and serve."
  },
  {
    "name": "Keto Power Meal 107",
    "diet": "keto",
    "allergies": [
      "soy"
    ],
    "calories": 665,
    "ingredients": [
      "almonds",
      "cauliflower",
      "olive oil",
      "avocado",
      "chicken"
    ],
    "nutrients": {
      "protein": "12g",
      "fat": "12g",
      "carbs": "32g"
    },
    "instructions": "Combine almonds, cauliflower, olive oil, avocado and add chicken. Cook and serve."
  },
  {
    "name": "Vegan Power Meal 108",
    "diet": "vegan",
    "allergies": [
      "dairy"
    ],
    "calories": 715,
    "ingredients": [
      "brown rice",
      "avocado",
      "tofu",
      "lentils",
      "tomatoes"
    ],
    "nutrients": {
      "protein": "40g",
      "fat": "19g",
      "carbs": "44g"
    },
    "instructions": "Combine brown rice, avocado, tofu, lentils and add tomatoes. Cook and serve."
  },
  {
    "name": "Keto Power Meal 109",
    "diet": "keto",
    "allergies": [],
    "calories": 767,
    "ingredients": [
      "almonds",
      "olive oil",
      "avocado",
      "cauliflower",
      "chicken"
    ],
    "nutrients": {
      "protein": "24g",
      "fat": "22g",
      "carbs": "36g"
    },
    "instructions": "Combine almonds, olive oil, avocado, cauliflower and add chicken. Cook and serve."
  },
  {
    "name": "Keto Power Meal 110",
    "diet": "keto",
    "allergies": [
      "fish"
    ],
    "calories": 544,
    "ingredients": [
      "cauliflower",
      "olive oil",
      "avocado",
      "cheese",
      "zucchini noodles"
    ],
    "nutrients": {
      "protein": "29g",
      "fat": "27g",
      "carbs": "59g"
    },
    "instructions": "Combine cauliflower, olive oil, avocado, cheese and add zucchini noodles. Cook and serve."
  },
  {
    "name": "Vegan Power Meal 111",
    "diet": "vegan",
    "allergies": [],
    "calories": 587,
    "ingredients": [
      "sweet potato",
      "lentils",
      "avocado",
      "tofu",
      "brown rice"
    ],
    "nutrients": {
      "protein": "38g",
      "fat": "24g",
      "carbs": "86g"
    },
    "instructions": "Combine sweet potato, lentils, avocado, tofu and add brown rice. Cook and serve."
  },
  {
    "name": "Vegan Power Meal 112",
    "diet": "vegan",
    "allergies": [
      "soy",
      "dairy"
    ],
    "calories": 426,
    "ingredients": [
      "sweet potato",
      "brown rice",
      "lentils",
      "spinach",
      "tofu"
    ],
    "nutrients": {
      "protein": "16g",
      "fat": "14g",
      "carbs": "20g"
    },
    "instructions": "Combine sweet potato, brown rice, lentils, spinach and add tofu. Cook and serve."
  },
  {
    "name": "Vegan Power Meal 113",
    "diet": "vegan",
    "allergies": [],
    "calories": 579,
    "ingredients": [
      "spinach",
      "lentils",
      "tomatoes",
      "quinoa",
      "sweet potato"
    ],
    "nutrients": {
      "protein": "28g",
      "fat": "14g",
      "carbs": "21g"
    },
    "instructions": "Combine spinach, lentils, tomatoes, quinoa and add sweet potato. Cook and serve."
  },
  {
    "name": "Vegetarian Power Meal 114",
    "diet": "vegetarian",
    "allergies": [
      "shellfish",
      "fish"
    ],
    "calories": 429,
    "ingredients": [
      "zucchini",
      "banana",
      "oats",
      "eggs",
      "yogurt"
    ],
    "nutrients": {
      "protein": "35g",
      "fat": "13g",
      "carbs": "86g"
    },
    "instructions": "Combine zucchini, banana, oats, eggs and add yogurt. Cook and serve."
  },
  {
    "name": "Balanced Power Meal 115",
    "diet": "balanced",
    "allergies": [
      "nuts",
      "shellfish"
    ],
    "calories": 899,
    "ingredients": [
      "whole wheat wrap",
      "turkey",
      "lettuce",
      "hummus",
      "toast"
    ],
    "nutrients": {
      "protein": "31g",
      "fat": "13g",
      "carbs": "54g"
    },
    "instructions": "Combine whole wheat wrap, turkey, lettuce, hummus and add toast. Cook and serve."
  },
  {
    "name": "Paleo Power Meal 116",
    "diet": "paleo",
    "allergies": [
      "shellfish"
    ],
    "calories": 668,
    "ingredients": [
      "carrots",
      "beef",
      "berries",
      "zucchini",
      "egg"
    ],
    "nutrients": {
      "protein": "23g",
      "fat": "12g",
      "carbs": "73g"
    },
    "instructions": "Combine carrots, beef, berries, zucchini and add egg. Cook and serve."
  },
  {
    "name": "Paleo Power Meal 117",
    "diet": "paleo",
    "allergies": [
      "dairy"
    ],
    "calories": 691,
    "ingredients": [
      "beef",
      "zucchini",
      "coconut oil",
      "berries",
      "carrots"
    ],
    "nutrients": {
      "protein": "12g",
      "fat": "11g",
      "carbs": "35g"
    },
    "instructions": "Combine beef, zucchini, coconut oil, berries and add carrots. Cook and serve."
  },
  {
    "name": "Vegan Power Meal 118",
    "diet": "vegan",
    "allergies": [
      "dairy"
    ],
    "calories": 425,
    "ingredients": [
      "quinoa",
      "brown rice",
      "avocado",
      "sweet potato",
      "tomatoes"
    ],
    "nutrients": {
      "protein": "34g",
      "fat": "28g",
      "carbs": "64g"
    },
    "instructions": "Combine quinoa, brown rice, avocado, sweet potato and add tomatoes. Cook and serve."
  },
  {
    "name": "Vegetarian Power Meal 119",
    "diet": "vegetarian",
    "allergies": [
      "nuts"
    ],
    "calories": 751,
    "ingredients": [
      "zucchini",
      "mushrooms",
      "yogurt",
      "cheddar",
      "banana"
    ],
    "nutrients": {
      "protein": "33g",
      "fat": "15g",
      "carbs": "88g"
    },
    "instructions": "Combine zucchini, mushrooms, yogurt, cheddar and add banana. Cook and serve."
  },
  {
    "name": "Keto Power Meal 120",
    "diet": "keto",
    "allergies": [
      "fish"
    ],
    "calories": 460,
    "ingredients": [
      "olive oil",
      "chicken",
      "avocado",
      "cheese",
      "cauliflower"
    ],
    "nutrients": {
      "protein": "25g",
      "fat": "30g",
      "carbs": "22g"
    },
    "instructions": "Combine olive oil, chicken, avocado, cheese and add cauliflower. Cook and serve."
  },
  {
    "name": "Paleo Power Meal 121",
    "diet": "paleo",
    "allergies": [
      "nuts",
      "shellfish"
    ],
    "calories": 815,
    "ingredients": [
      "almond flour",
      "carrots",
      "egg",
      "coconut oil",
      "spinach"
    ],
    "nutrients": {
      "protein": "21g",
      "fat": "26g",
      "carbs": "39g"
    },
    "instructions": "Combine almond flour, carrots, egg, coconut oil and add spinach. Cook and serve."
  },
  {
    "name": "Vegan Power Meal 122",
    "diet": "vegan",
    "allergies": [
      "gluten"
    ],
    "calories": 456,
    "ingredients": [
      "tomatoes",
      "lentils",
      "spinach",
      "sweet potato",
      "quinoa"
    ],
    "nutrients": {
      "protein": "35g",
      "fat": "11g",
      "carbs": "55g"
    },
    "instructions": "Combine tomatoes, lentils, spinach, sweet potato and add quinoa. Cook and serve."
  },
  {
    "name": "Paleo Power Meal 123",
    "diet": "paleo",
    "allergies": [
      "fish",
      "eggs"
    ],
    "calories": 512,
    "ingredients": [
      "zucchini",
      "almond flour",
      "carrots",
      "spinach",
      "beef"
    ],
    "nutrients": {
      "protein": "15g",
      "fat": "17g",
      "carbs": "52g"
    },
    "instructions": "Combine zucchini, almond flour, carrots, spinach and add beef. Cook and serve."
  },
  {
    "name": "Paleo Power Meal 124",
    "diet": "paleo",
    "allergies": [
      "soy",
      "nuts"
    ],
    "calories": 698,
    "ingredients": [
      "zucchini",
      "coconut oil",
      "beef",
      "berries",
      "almond flour"
    ],
    "nutrients": {
      "protein": "22g",
      "fat": "27g",
      "carbs": "46g"
    },
    "instructions": "Combine zucchini, coconut oil, beef, berries and add almond flour. Cook and serve."
  },
  {
    "name": "Balanced Power Meal 125",
    "diet": "balanced",
    "allergies": [
      "nuts"
    ],
    "calories": 422,
    "ingredients": [
      "whole wheat wrap",
      "hummus",
      "lettuce",
      "turkey",
      "beans"
    ],
    "nutrients": {
      "protein": "15g",
      "fat": "23g",
      "carbs": "80g"
    },
    "instructions": "Combine whole wheat wrap, hummus, lettuce, turkey and add beans. Cook and serve."
  },
  {
    "name": "Keto Power Meal 126",
    "diet": "keto",
    "allergies": [],
    "calories": 850,
    "ingredients": [
      "cheese",
      "avocado",
      "cauliflower",
      "almonds",
      "olive oil"
    ],
    "nutrients": {
      "protein": "37g",
      "fat": "13g",
      "carbs": "68g"
    },
    "instructions": "Combine cheese, avocado, cauliflower, almonds and add olive oil. Cook and serve."
  },
  {
    "name": "Paleo Power Meal 127",
    "diet": "paleo",
    "allergies": [
      "eggs",
      "soy"
    ],
    "calories": 737,
    "ingredients": [
      "almond flour",
      "egg",
      "spinach",
      "coconut oil",
      "carrots"
    ],
    "nutrients": {
      "protein": "34g",
      "fat": "19g",
      "carbs": "49g"
    },
    "instructions": "Combine almond flour, egg, spinach, coconut oil and add carrots. Cook and serve."
  },
  {
    "name": "Vegan Power Meal 128",
    "diet": "vegan",
    "allergies": [],
    "calories": 758,
    "ingredients": [
      "tomatoes",
      "quinoa",
      "avocado",
      "sweet potato",
      "tofu"
    ],
    "nutrients": {
      "protein": "31g",
      "fat": "11g",
      "carbs": "52g"
    },
    "instructions": "Combine tomatoes, quinoa, avocado, sweet potato and add tofu. Cook and serve."
  },
  {
    "name": "Vegetarian Power Meal 129",
    "diet": "vegetarian",
    "allergies": [
      "fish",
      "nuts"
    ],
    "calories": 717,
    "ingredients": [
      "eggs",
      "banana",
      "zucchini",
      "broccoli",
      "mushrooms"
    ],
    "nutrients": {
      "protein": "29g",
      "fat": "14g",
      "carbs": "60g"
    },
    "instructions": "Combine eggs, banana, zucchini, broccoli and add mushrooms. Cook and serve."
  },
  {
    "name": "Vegetarian Power Meal 130",
    "diet": "vegetarian",
    "allergies": [],
    "calories": 503,
    "ingredients": [
      "cheddar",
      "banana",
      "broccoli",
      "oats",
      "mushrooms"
    ],
    "nutrients": {
      "protein": "25g",
      "fat": "12g",
      "carbs": "45g"
    },
    "instructions": "Combine cheddar, banana, broccoli, oats and add mushrooms. Cook and serve."
  },
  {
    "name": "Balanced Power Meal 131",
    "diet": "balanced",
    "allergies": [
      "gluten",
      "shellfish"
    ],
    "calories": 783,
    "ingredients": [
      "cucumber",
      "whole wheat wrap",
      "toast",
      "hummus",
      "lettuce"
    ],
    "nutrients": {
      "protein": "16g",
      "fat": "28g",
      "carbs": "62g"
    },
    "instructions": "Combine cucumber, whole wheat wrap, toast, hummus and add lettuce. Cook and serve."
  },
  {
    "name": "Balanced Power Meal 132",
    "diet": "balanced",
    "allergies": [],
    "calories": 454,
    "ingredients": [
      "hummus",
      "toast",
      "whole wheat wrap",
      "beans",
      "rice"
    ],
    "nutrients": {
      "protein": "20g",
      "fat": "11g",
      "carbs": "86g"
    },
    "instructions": "Combine hummus, toast, whole wheat wrap, beans and add rice. Cook and serve."
  },
  {
    "name": "Paleo Power Meal 133",
    "diet": "paleo",
    "allergies": [
      "fish"
    ],
    "calories": 408,
    "ingredients": [
      "zucchini",
      "carrots",
      "berries",
      "coconut oil",
      "beef"
    ],
    "nutrients": {
      "protein": "17g",
      "fat": "12g",
      "carbs": "28g"
    },
    "instructions": "Combine zucchini, carrots, berries, coconut oil and add beef. Cook and serve."
  },
  {
    "name": "Keto Power Meal 134",
    "diet": "keto",
    "allergies": [
      "eggs",
      "gluten"
    ],
    "calories": 726,
    "ingredients": [
      "almonds",
      "olive oil",
      "cheese",
      "avocado",
      "chicken"
    ],
    "nutrients": {
      "protein": "13g",
      "fat": "13g",
      "carbs": "41g"
    },
    "instructions": "Combine almonds, olive oil, cheese, avocado and add chicken. Cook and serve."
  },
  {
    "name": "Vegan Power Meal 135",
    "diet": "vegan",
    "allergies": [
      "shellfish"
    ],
    "calories": 737,
    "ingredients": [
      "quinoa",
      "tomatoes",
      "avocado",
      "lentils",
      "brown rice"
    ],
    "nutrients": {
      "protein": "15g",
      "fat": "30g",
      "carbs": "82g"
    },
    "instructions": "Combine quinoa, tomatoes, avocado, lentils and add brown rice. Cook and serve."
  },
  {
    "name": "Vegetarian Power Meal 136",
    "diet": "vegetarian",
    "allergies": [
      "soy"
    ],
    "calories": 798,
    "ingredients": [
      "banana",
      "mushrooms",
      "cheddar",
      "eggs",
      "oats"
    ],
    "nutrients": {
      "protein": "27g",
      "fat": "29g",
      "carbs": "56g"
    },
    "instructions": "Combine banana, mushrooms, cheddar, eggs and add oats. Cook and serve."
  },
  {
    "name": "Balanced Power Meal 137",
    "diet": "balanced",
    "allergies": [
      "soy"
    ],
    "calories": 727,
    "ingredients": [
      "hummus",
      "turkey",
      "cucumber",
      "rice",
      "toast"
    ],
    "nutrients": {
      "protein": "28g",
      "fat": "15g",
      "carbs": "22g"
    },
    "instructions": "Combine hummus, turkey, cucumber, rice and add toast. Cook and serve."
  },
  {
    "name": "Keto Power Meal 138",
    "diet": "keto",
    "allergies": [
      "dairy"
    ],
    "calories": 745,
    "ingredients": [
      "cheese",
      "zucchini noodles",
      "almonds",
      "chicken",
      "cauliflower"
    ],
    "nutrients": {
      "protein": "21g",
      "fat": "30g",
      "carbs": "74g"
    },
    "instructions": "Combine cheese, zucchini noodles, almonds, chicken and add cauliflower. Cook and serve."
  },
  {
    "name": "Balanced Power Meal 139",
    "diet": "balanced",
    "allergies": [
      "nuts",
      "dairy"
    ],
    "calories": 649,
    "ingredients": [
      "hummus",
      "toast",
      "rice",
      "cucumber",
      "whole wheat wrap"
    ],
    "nutrients": {
      "protein": "13g",
      "fat": "26g",
      "carbs": "26g"
    },
    "instructions": "Combine hummus, toast, rice, cucumber and add whole wheat wrap. Cook and serve."
  },
  {
    "name": "Vegetarian Power Meal 140",
    "diet": "vegetarian",
    "allergies": [
      "gluten"
    ],
    "calories": 639,
    "ingredients": [
      "broccoli",
      "yogurt",
      "zucchini",
      "mushrooms",
      "eggs"
    ],
    "nutrients": {
      "protein": "38g",
      "fat": "26g",
      "carbs": "39g"
    },
    "instructions": "Combine broccoli, yogurt, zucchini, mushrooms and add eggs. Cook and serve."
  },
  {
    "name": "Keto Power Meal 141",
    "diet": "keto",
    "allergies": [
      "shellfish",
      "nuts"
    ],
    "calories": 806,
    "ingredients": [
      "almonds",
      "cheese",
      "avocado",
      "zucchini noodles",
      "chicken"
    ],
    "nutrients": {
      "protein": "25g",
      "fat": "30g",
      "carbs": "46g"
    },
    "instructions": "Combine almonds, cheese, avocado, zucchini noodles and add chicken. Cook and serve."
  },
  {
    "name": "Paleo Power Meal 142",
    "diet": "paleo",
    "allergies": [
      "gluten",
      "dairy"
    ],
    "calories": 485,
    "ingredients": [
      "almond flour",
      "egg",
      "berries",
      "carrots",
      "beef"
    ],
    "nutrients": {
      "protein": "26g",
      "fat": "16g",
      "carbs": "51g"
    },
    "instructions": "Combine almond flour, egg, berries, carrots and add beef. Cook and serve."
  },
  {
    "name": "Vegan Power Meal 143",
    "diet": "vegan",
    "allergies": [
      "eggs",
      "gluten"
    ],
    "calories": 544,
    "ingredients": [
      "sweet potato",
      "avocado",
      "lentils",
      "tofu",
      "brown rice"
    ],
    "nutrients": {
      "protein": "13g",
      "fat": "14g",
      "carbs": "52g"
    },
    "instructions": "Combine sweet potato, avocado, lentils, tofu and add brown rice. Cook and serve."
  },
  {
    "name": "Balanced Power Meal 144",
    "diet": "balanced",
    "allergies": [],
    "calories": 421,
    "ingredients": [
      "beans",
      "whole wheat wrap",
      "toast",
      "turkey",
      "lettuce"
    ],
    "nutrients": {
      "protein": "39g",
      "fat": "20g",
      "carbs": "21g"
    },
    "instructions": "Combine beans, whole wheat wrap, toast, turkey and add lettuce. Cook and serve."
  },
  {
    "name": "Vegetarian Power Meal 145",
    "diet": "vegetarian",
    "allergies": [],
    "calories": 533,
    "ingredients": [
      "oats",
      "cheddar",
      "banana",
      "yogurt",
      "zucchini"
    ],
    "nutrients": {
      "protein": "16g",
      "fat": "27g",
      "carbs": "39g"
    },
    "instructions": "Combine oats, cheddar, banana, yogurt and add zucchini. Cook and serve."
  },
  {
    "name": "Keto Power Meal 146",
    "diet": "keto",
    "allergies": [
      "eggs"
    ],
    "calories": 524,
    "ingredients": [
      "almonds",
      "chicken",
      "zucchini noodles",
      "avocado",
      "cauliflower"
    ],
    "nutrients": {
      "protein": "40g",
      "fat": "26g",
      "carbs": "37g"
    },
    "instructions": "Combine almonds, chicken, zucchini noodles, avocado and add cauliflower. Cook and serve."
  },
  {
    "name": "Paleo Power Meal 147",
    "diet": "paleo",
    "allergies": [
      "shellfish",
      "soy"
    ],
    "calories": 632,
    "ingredients": [
      "berries",
      "zucchini",
      "spinach",
      "egg",
      "beef"
    ],
    "nutrients": {
      "protein": "22g",
      "fat": "12g",
      "carbs": "69g"
    },
    "instructions": "Combine berries, zucchini, spinach, egg and add beef. Cook and serve."
  },
  {
    "name": "Vegan Power Meal 148",
    "diet": "vegan",
    "allergies": [
      "eggs",
      "shellfish"
    ],
    "calories": 757,
    "ingredients": [
      "spinach",
      "quinoa",
      "tofu",
      "brown rice",
      "tomatoes"
    ],
    "nutrients": {
      "protein": "34g",
      "fat": "18g",
      "carbs": "54g"
    },
    "instructions": "Combine spinach, quinoa, tofu, brown rice and add tomatoes. Cook and serve."
  },
  {
    "name": "Vegan Power Meal 149",
    "diet": "vegan",
    "allergies": [],
    "calories": 723,
    "ingredients": [
      "sweet potato",
      "lentils",
      "quinoa",
      "tofu",
      "brown rice"
    ],
    "nutrients": {
      "protein": "37g",
      "fat": "17g",
      "carbs": "40g"
    },
    "instructions": "Combine sweet potato, lentils, quinoa, tofu and add brown rice. Cook and serve."
  },
  {
    "name": "Balanced Power Meal 150",
    "diet": "balanced",
    "allergies": [
      "soy"
    ],
    "calories": 416,
    "ingredients": [
      "lettuce",
      "rice",
      "whole wheat wrap",
      "toast",
      "hummus"
    ],
    "nutrients": {
      "protein": "33g",
      "fat": "23g",
      "carbs": "20g"
    },
    "instructions": "Combine lettuce, rice, whole wheat wrap, toast and add hummus. Cook and serve."
  },
  {
    "name": "Keto Power Meal 151",
    "diet": "keto",
    "allergies": [
      "nuts",
      "soy"
    ],
    "calories": 839,
    "ingredients": [
      "olive oil",
      "cauliflower",
      "cheese",
      "chicken",
      "zucchini noodles"
    ],
    "nutrients": {
      "protein": "27g",
      "fat": "29g",
      "carbs": "31g"
    },
    "instructions": "Combine olive oil, cauliflower, cheese, chicken and add zucchini noodles. Cook and serve."
  },
  {
    "name": "Keto Power Meal 152",
    "diet": "keto",
    "allergies": [
      "shellfish"
    ],
    "calories": 574,
    "ingredients": [
      "chicken",
      "olive oil",
      "cauliflower",
      "avocado",
      "almonds"
    ],
    "nutrients": {
      "protein": "27g",
      "fat": "15g",
      "carbs": "84g"
    },
    "instructions": "Combine chicken, olive oil, cauliflower, avocado and add almonds. Cook and serve."
  },
  {
    "name": "Balanced Power Meal 153",
    "diet": "balanced",
    "allergies": [
      "nuts"
    ],
    "calories": 573,
    "ingredients": [
      "whole wheat wrap",
      "toast",
      "rice",
      "cucumber",
      "turkey"
    ],
    "nutrients": {
      "protein": "23g",
      "fat": "13g",
      "carbs": "73g"
    },
    "instructions": "Combine whole wheat wrap, toast, rice, cucumber and add turkey. Cook and serve."
  },
  {
    "name": "Balanced Power Meal 154",
    "diet": "balanced",
    "allergies": [
      "fish"
    ],
    "calories": 824,
    "ingredients": [
      "lettuce",
      "toast",
      "rice",
      "turkey",
      "beans"
    ],
    "nutrients": {
      "protein": "15g",
      "fat": "13g",
      "carbs": "37g"
    },
    "instructions": "Combine lettuce, toast, rice, turkey and add beans. Cook and serve."
  },
  {
    "name": "Paleo Power Meal 155",
    "diet": "paleo",
    "allergies": [],
    "calories": 517,
    "ingredients": [
      "beef",
      "spinach",
      "egg",
      "berries",
      "carrots"
    ],
    "nutrients": {
      "protein": "33g",
      "fat": "15g",
      "carbs": "73g"
    },
    "instructions": "Combine beef, spinach, egg, berries and add carrots. Cook and serve."
  },
  {
    "name": "Keto Power Meal 156",
    "diet": "keto",
    "allergies": [
      "soy"
    ],
    "calories": 664,
    "ingredients": [
      "olive oil",
      "almonds",
      "avocado",
      "chicken",
      "zucchini noodles"
    ],
    "nutrients": {
      "protein": "30g",
      "fat": "21g",
      "carbs": "43g"
    },
    "instructions": "Combine olive oil, almonds, avocado, chicken and add zucchini noodles. Cook and serve."
  },
  {
    "name": "Balanced Power Meal 157",
    "diet": "balanced",
    "allergies": [],
    "calories": 509,
    "ingredients": [
      "beans",
      "rice",
      "toast",
      "cucumber",
      "turkey"
    ],
    "nutrients": {
      "protein": "39g",
      "fat": "17g",
      "carbs": "84g"
    },
    "instructions": "Combine beans, rice, toast, cucumber and add turkey. Cook and serve."
  },
  {
    "name": "Vegetarian Power Meal 158",
    "diet": "vegetarian",
    "allergies": [
      "eggs",
      "gluten"
    ],
    "calories": 436,
    "ingredients": [
      "oats",
      "cheddar",
      "zucchini",
      "broccoli",
      "yogurt"
    ],
    "nutrients": {
      "protein": "24g",
      "fat": "30g",
      "carbs": "36g"
    },
    "instructions": "Combine oats, cheddar, zucchini, broccoli and add yogurt. Cook and serve."
  },
  {
    "name": "Paleo Power Meal 159",
    "diet": "paleo",
    "allergies": [
      "gluten",
      "fish"
    ],
    "calories": 751,
    "ingredients": [
      "carrots",
      "zucchini",
      "spinach",
      "almond flour",
      "berries"
    ],
    "nutrients": {
      "protein": "38g",
      "fat": "27g",
      "carbs": "70g"
    },
    "instructions": "Combine carrots, zucchini, spinach, almond flour and add berries. Cook and serve."
  },
  {
    "name": "Balanced Power Meal 160",
    "diet": "balanced",
    "allergies": [],
    "calories": 585,
    "ingredients": [
      "cucumber",
      "lettuce",
      "toast",
      "rice",
      "turkey"
    ],
    "nutrients": {
      "protein": "33g",
      "fat": "17g",
      "carbs": "69g"
    },
    "instructions": "Combine cucumber, lettuce, toast, rice and add turkey. Cook and serve."
  },
  {
    "name": "Balanced Power Meal 161",
    "diet": "balanced",
    "allergies": [
      "shellfish"
    ],
    "calories": 624,
    "ingredients": [
      "turkey",
      "toast",
      "beans",
      "cucumber",
      "lettuce"
    ],
    "nutrients": {
      "protein": "31g",
      "fat": "14g",
      "carbs": "38g"
    },
    "instructions": "Combine turkey, toast, beans, cucumber and add lettuce. Cook and serve."
  },
  {
    "name": "Vegetarian Power Meal 162",
    "diet": "vegetarian",
    "allergies": [],
    "calories": 640,
    "ingredients": [
      "banana",
      "eggs",
      "zucchini",
      "cheddar",
      "broccoli"
    ],
    "nutrients": {
      "protein": "26g",
      "fat": "21g",
      "carbs": "80g"
    },
    "instructions": "Combine banana, eggs, zucchini, cheddar and add broccoli. Cook and serve."
  },
  {
    "name": "Vegetarian Power Meal 163",
    "diet": "vegetarian",
    "allergies": [],
    "calories": 460,
    "ingredients": [
      "zucchini",
      "yogurt",
      "mushrooms",
      "oats",
      "banana"
    ],
    "nutrients": {
      "protein": "29g",
      "fat": "18g",
      "carbs": "90g"
    },
    "instructions": "Combine zucchini, yogurt, mushrooms, oats and add banana. Cook and serve."
  },
  {
    "name": "Vegan Power Meal 164",
    "diet": "vegan",
    "allergies": [
      "nuts",
      "shellfish"
    ],
    "calories": 551,
    "ingredients": [
      "brown rice",
      "avocado",
      "spinach",
      "tofu",
      "quinoa"
    ],
    "nutrients": {
      "protein": "33g",
      "fat": "19g",
      "carbs": "57g"
    },
    "instructions": "Combine brown rice, avocado, spinach, tofu and add quinoa. Cook and serve."
  },
  {
    "name": "Vegetarian Power Meal 165",
    "diet": "vegetarian",
    "allergies": [
      "dairy"
    ],
    "calories": 667,
    "ingredients": [
      "yogurt",
      "broccoli",
      "zucchini",
      "mushrooms",
      "oats"
    ],
    "nutrients": {
      "protein": "19g",
      "fat": "30g",
      "carbs": "73g"
    },
    "instructions": "Combine yogurt, broccoli, zucchini, mushrooms and add oats. Cook and serve."
  },
  {
    "name": "Keto Power Meal 166",
    "diet": "keto",
    "allergies": [
      "gluten",
      "dairy"
    ],
    "calories": 876,
    "ingredients": [
      "olive oil",
      "cauliflower",
      "avocado",
      "cheese",
      "chicken"
    ],
    "nutrients": {
      "protein": "24g",
      "fat": "26g",
      "carbs": "40g"
    },
    "instructions": "Combine olive oil, cauliflower, avocado, cheese and add chicken. Cook and serve."
  },
  {
    "name": "Keto Power Meal 167",
    "diet": "keto",
    "allergies": [
      "gluten",
      "shellfish"
    ],
    "calories": 669,
    "ingredients": [
      "chicken",
      "almonds",
      "zucchini noodles",
      "avocado",
      "cauliflower"
    ],
    "nutrients": {
      "protein": "37g",
      "fat": "15g",
      "carbs": "22g"
    },
    "instructions": "Combine chicken, almonds, zucchini noodles, avocado and add cauliflower. Cook and serve."
  },
  {
    "name": "Keto Power Meal 168",
    "diet": "keto",
    "allergies": [
      "dairy"
    ],
    "calories": 806,
    "ingredients": [
      "zucchini noodles",
      "avocado",
      "chicken",
      "cheese",
      "olive oil"
    ],
    "nutrients": {
      "protein": "25g",
      "fat": "12g",
      "carbs": "57g"
    },
    "instructions": "Combine zucchini noodles, avocado, chicken, cheese and add olive oil. Cook and serve."
  },
  {
    "name": "Paleo Power Meal 169",
    "diet": "paleo",
    "allergies": [],
    "calories": 795,
    "ingredients": [
      "egg",
      "zucchini",
      "almond flour",
      "coconut oil",
      "spinach"
    ],
    "nutrients": {
      "protein": "28g",
      "fat": "21g",
      "carbs": "40g"
    },
    "instructions": "Combine egg, zucchini, almond flour, coconut oil and add spinach. Cook and serve."
  },
  {
    "name": "Vegan Power Meal 170",
    "diet": "vegan",
    "allergies": [
      "gluten"
    ],
    "calories": 577,
    "ingredients": [
      "quinoa",
      "brown rice",
      "tomatoes",
      "tofu",
      "lentils"
    ],
    "nutrients": {
      "protein": "40g",
      "fat": "25g",
      "carbs": "69g"
    },
    "instructions": "Combine quinoa, brown rice, tomatoes, tofu and add lentils. Cook and serve."
  },
  {
    "name": "Keto Power Meal 171",
    "diet": "keto",
    "allergies": [
      "gluten",
      "nuts"
    ],
    "calories": 448,
    "ingredients": [
      "chicken",
      "olive oil",
      "zucchini noodles",
      "almonds",
      "avocado"
    ],
    "nutrients": {
      "protein": "37g",
      "fat": "27g",
      "carbs": "59g"
    },
    "instructions": "Combine chicken, olive oil, zucchini noodles, almonds and add avocado. Cook and serve."
  },
  {
    "name": "Paleo Power Meal 172",
    "diet": "paleo",
    "allergies": [
      "eggs",
      "shellfish"
    ],
    "calories": 499,
    "ingredients": [
      "almond flour",
      "coconut oil",
      "zucchini",
      "egg",
      "beef"
    ],
    "nutrients": {
      "protein": "29g",
      "fat": "24g",
      "carbs": "20g"
    },
    "instructions": "Combine almond flour, coconut oil, zucchini, egg and add beef. Cook and serve."
  },
  {
    "name": "Keto Power Meal 173",
    "diet": "keto",
    "allergies": [
      "nuts"
    ],
    "calories": 746,
    "ingredients": [
      "olive oil",
      "avocado",
      "zucchini noodles",
      "cauliflower",
      "chicken"
    ],
    "nutrients": {
      "protein": "28g",
      "fat": "25g",
      "carbs": "34g"
    },
    "instructions": "Combine olive oil, avocado, zucchini noodles, cauliflower and add chicken. Cook and serve."
  },
  {
    "name": "Vegan Power Meal 174",
    "diet": "vegan",
    "allergies": [],
    "calories": 692,
    "ingredients": [
      "brown rice",
      "sweet potato",
      "tomatoes",
      "avocado",
      "spinach"
    ],
    "nutrients": {
      "protein": "22g",
      "fat": "29g",
      "carbs": "72g"
    },
    "instructions": "Combine brown rice, sweet potato, tomatoes, avocado and add spinach. Cook and serve."
  },
  {
    "name": "Keto Power Meal 175",
    "diet": "keto",
    "allergies": [],
    "calories": 855,
    "ingredients": [
      "cheese",
      "olive oil",
      "almonds",
      "avocado",
      "zucchini noodles"
    ],
    "nutrients": {
      "protein": "26g",
      "fat": "25g",
      "carbs": "58g"
    },
    "instructions": "Combine cheese, olive oil, almonds, avocado and add zucchini noodles. Cook and serve."
  },
  {
    "name": "Balanced Power Meal 176",
    "diet": "balanced",
    "allergies": [
      "nuts"
    ],
    "calories": 434,
    "ingredients": [
      "cucumber",
      "beans",
      "lettuce",
      "hummus",
      "turkey"
    ],
    "nutrients": {
      "protein": "35g",
      "fat": "20g",
      "carbs": "59g"
    },
    "instructions": "Combine cucumber, beans, lettuce, hummus and add turkey. Cook and serve."
  },
  {
    "name": "Balanced Power Meal 177",
    "diet": "balanced",
    "allergies": [
      "eggs",
      "gluten"
    ],
    "calories": 779,
    "ingredients": [
      "beans",
      "rice",
      "toast",
      "turkey",
      "cucumber"
    ],
    "nutrients": {
      "protein": "15g",
      "fat": "13g",
      "carbs": "44g"
    },
    "instructions": "Combine beans, rice, toast, turkey and add cucumber. Cook and serve."
  },
  {
    "name": "Vegetarian Power Meal 178",
    "diet": "vegetarian",
    "allergies": [
      "shellfish"
    ],
    "calories": 891,
    "ingredients": [
      "cheddar",
      "zucchini",
      "banana",
      "oats",
      "broccoli"
    ],
    "nutrients": {
      "protein": "16g",
      "fat": "24g",
      "carbs": "48g"
    },
    "instructions": "Combine cheddar, zucchini, banana, oats and add broccoli. Cook and serve."
  },
  {
    "name": "Paleo Power Meal 179",
    "diet": "paleo",
    "allergies": [],
    "calories": 531,
    "ingredients": [
      "coconut oil",
      "beef",
      "egg",
      "zucchini",
      "carrots"
    ],
    "nutrients": {
      "protein": "34g",
      "fat": "19g",
      "carbs": "36g"
    },
    "instructions": "Combine coconut oil, beef, egg, zucchini and add carrots. Cook and serve."
  },
  {
    "name": "Balanced Power Meal 180",
    "diet": "balanced",
    "allergies": [
      "shellfish"
    ],
    "calories": 643,
    "ingredients": [
      "turkey",
      "toast",
      "whole wheat wrap",
      "hummus",
      "cucumber"
    ],
    "nutrients": {
      "protein": "15g",
      "fat": "18g",
      "carbs": "87g"
    },
    "instructions": "Combine turkey, toast, whole wheat wrap, hummus and add cucumber. Cook and serve."
  },
  {
    "name": "Vegetarian Power Meal 181",
    "diet": "vegetarian",
    "allergies": [],
    "calories": 491,
    "ingredients": [
      "broccoli",
      "zucchini",
      "mushrooms",
      "banana",
      "eggs"
    ],
    "nutrients": {
      "protein": "21g",
      "fat": "17g",
      "carbs": "24g"
    },
    "instructions": "Combine broccoli, zucchini, mushrooms, banana and add eggs. Cook and serve."
  },
  {
    "name": "Keto Power Meal 182",
    "diet": "keto",
    "allergies": [
      "dairy"
    ],
    "calories": 600,
    "ingredients": [
      "almonds",
      "zucchini noodles",
      "chicken",
      "avocado",
      "cauliflower"
    ],
    "nutrients": {
      "protein": "36g",
      "fat": "13g",
      "carbs": "62g"
    },
    "instructions": "Combine almonds, zucchini noodles, chicken, avocado and add cauliflower. Cook and serve."
  },
  {
    "name": "Balanced Power Meal 183",
    "diet": "balanced",
    "allergies": [
      "shellfish"
    ],
    "calories": 664,
    "ingredients": [
      "cucumber",
      "turkey",
      "toast",
      "lettuce",
      "beans"
    ],
    "nutrients": {
      "protein": "12g",
      "fat": "13g",
      "carbs": "60g"
    },
    "instructions": "Combine cucumber, turkey, toast, lettuce and add beans. Cook and serve."
  },
  {
    "name": "Vegan Power Meal 184",
    "diet": "vegan",
    "allergies": [
      "nuts",
      "soy"
    ],
    "calories": 435,
    "ingredients": [
      "tofu",
      "spinach",
      "sweet potato",
      "quinoa",
      "lentils"
    ],
    "nutrients": {
      "protein": "39g",
      "fat": "20g",
      "carbs": "68g"
    },
    "instructions": "Combine tofu, spinach, sweet potato, quinoa and add lentils. Cook and serve."
  },
  {
    "name": "Vegetarian Power Meal 185",
    "diet": "vegetarian",
    "allergies": [],
    "calories": 676,
    "ingredients": [
      "oats",
      "eggs",
      "zucchini",
      "mushrooms",
      "cheddar"
    ],
    "nutrients": {
      "protein": "31g",
      "fat": "12g",
      "carbs": "67g"
    },
    "instructions": "Combine oats, eggs, zucchini, mushrooms and add cheddar. Cook and serve."
  },
  {
    "name": "Paleo Power Meal 186",
    "diet": "paleo",
    "allergies": [
      "soy"
    ],
    "calories": 640,
    "ingredients": [
      "spinach",
      "zucchini",
      "egg",
      "coconut oil",
      "berries"
    ],
    "nutrients": {
      "protein": "29g",
      "fat": "18g",
      "carbs": "37g"
    },
    "instructions": "Combine spinach, zucchini, egg, coconut oil and add berries. Cook and serve."
  },
  {
    "name": "Paleo Power Meal 187",
    "diet": "paleo",
    "allergies": [
      "gluten",
      "nuts"
    ],
    "calories": 499,
    "ingredients": [
      "spinach",
      "berries",
      "beef",
      "almond flour",
      "zucchini"
    ],
    "nutrients": {
      "protein": "20g",
      "fat": "20g",
      "carbs": "88g"
    },
    "instructions": "Combine spinach, berries, beef, almond flour and add zucchini. Cook and serve."
  },
  {
    "name": "Paleo Power Meal 188",
    "diet": "paleo",
    "allergies": [],
    "calories": 591,
    "ingredients": [
      "coconut oil",
      "egg",
      "spinach",
      "beef",
      "almond flour"
    ],
    "nutrients": {
      "protein": "15g",
      "fat": "22g",
      "carbs": "41g"
    },
    "instructions": "Combine coconut oil, egg, spinach, beef and add almond flour. Cook and serve."
  },
  {
    "name": "Vegan Power Meal 189",
    "diet": "vegan",
    "allergies": [
      "eggs",
      "nuts"
    ],
    "calories": 673,
    "ingredients": [
      "lentils",
      "tomatoes",
      "avocado",
      "spinach",
      "brown rice"
    ],
    "nutrients": {
      "protein": "33g",
      "fat": "18g",
      "carbs": "61g"
    },
    "instructions": "Combine lentils, tomatoes, avocado, spinach and add brown rice. Cook and serve."
  },
  {
    "name": "Vegetarian Power Meal 190",
    "diet": "vegetarian",
    "allergies": [
      "soy"
    ],
    "calories": 655,
    "ingredients": [
      "cheddar",
      "eggs",
      "mushrooms",
      "oats",
      "banana"
    ],
    "nutrients": {
      "protein": "40g",
      "fat": "14g",
      "carbs": "78g"
    },
    "instructions": "Combine cheddar, eggs, mushrooms, oats and add banana. Cook and serve."
  },
  {
    "name": "Vegetarian Power Meal 191",
    "diet": "vegetarian",
    "allergies": [],
    "calories": 449,
    "ingredients": [
      "banana",
      "oats",
      "mushrooms",
      "yogurt",
      "cheddar"
    ],
    "nutrients": {
      "protein": "39g",
      "fat": "28g",
      "carbs": "24g"
    },
    "instructions": "Combine banana, oats, mushrooms, yogurt and add cheddar. Cook and serve."
  },
  {
    "name": "Vegan Power Meal 192",
    "diet": "vegan",
    "allergies": [
      "soy",
      "fish"
    ],
    "calories": 484,
    "ingredients": [
      "spinach",
      "brown rice",
      "tomatoes",
      "tofu",
      "quinoa"
    ],
    "nutrients": {
      "protein": "40g",
      "fat": "11g",
      "carbs": "83g"
    },
    "instructions": "Combine spinach, brown rice, tomatoes, tofu and add quinoa. Cook and serve."
  },
  {
    "name": "Keto Power Meal 193",
    "diet": "keto",
    "allergies": [
      "dairy",
      "eggs"
    ],
    "calories": 567,
    "ingredients": [
      "olive oil",
      "almonds",
      "chicken",
      "cauliflower",
      "zucchini noodles"
    ],
    "nutrients": {
      "protein": "22g",
      "fat": "12g",
      "carbs": "39g"
    },
    "instructions": "Combine olive oil, almonds, chicken, cauliflower and add zucchini noodles. Cook and serve."
  },
  {
    "name": "Paleo Power Meal 194",
    "diet": "paleo",
    "allergies": [
      "eggs",
      "fish"
    ],
    "calories": 742,
    "ingredients": [
      "almond flour",
      "spinach",
      "berries",
      "beef",
      "egg"
    ],
    "nutrients": {
      "protein": "23g",
      "fat": "10g",
      "carbs": "38g"
    },
    "instructions": "Combine almond flour, spinach, berries, beef and add egg. Cook and serve."
  },
  {
    "name": "Paleo Power Meal 195",
    "diet": "paleo",
    "allergies": [
      "gluten",
      "shellfish"
    ],
    "calories": 616,
    "ingredients": [
      "carrots",
      "beef",
      "almond flour",
      "spinach",
      "berries"
    ],
    "nutrients": {
      "protein": "40g",
      "fat": "20g",
      "carbs": "30g"
    },
    "instructions": "Combine carrots, beef, almond flour, spinach and add berries. Cook and serve."
  },
  {
    "name": "Vegetarian Power Meal 196",
    "diet": "vegetarian",
    "allergies": [
      "nuts",
      "shellfish"
    ],
    "calories": 467,
    "ingredients": [
      "cheddar",
      "eggs",
      "broccoli",
      "zucchini",
      "yogurt"
    ],
    "nutrients": {
      "protein": "31g",
      "fat": "19g",
      "carbs": "65g"
    },
    "instructions": "Combine cheddar, eggs, broccoli, zucchini and add yogurt. Cook and serve."
  },
  {
    "name": "Paleo Power Meal 197",
    "diet": "paleo",
    "allergies": [],
    "calories": 570,
    "ingredients": [
      "almond flour",
      "carrots",
      "spinach",
      "egg",
      "coconut oil"
    ],
    "nutrients": {
      "protein": "29g",
      "fat": "27g",
      "carbs": "80g"
    },
    "instructions": "Combine almond flour, carrots, spinach, egg and add coconut oil. Cook and serve."
  },
  {
    "name": "Balanced Power Meal 198",
    "diet": "balanced",
    "allergies": [
      "soy",
      "dairy"
    ],
    "calories": 574,
    "ingredients": [
      "whole wheat wrap",
      "rice",
      "turkey",
      "lettuce",
      "hummus"
    ],
    "nutrients": {
      "protein": "33g",
      "fat": "25g",
      "carbs": "83g"
    },
    "instructions": "Combine whole wheat wrap, rice, turkey, lettuce and add hummus. Cook and serve."
  },
  {
    "name": "Vegan Power Meal 199",
    "diet": "vegan",
    "allergies": [
      "soy"
    ],
    "calories": 596,
    "ingredients": [
      "quinoa",
      "avocado",
      "spinach",
      "tomatoes",
      "lentils"
    ],
    "nutrients": {
      "protein": "23g",
      "fat": "10g",
      "carbs": "62g"
    },
    "instructions": "Combine quinoa, avocado, spinach, tomatoes and add lentils. Cook and serve."
  },
  {
    "name": "Balanced Power Meal 200",
    "diet": "balanced",
    "allergies": [],
    "calories": 561,
    "ingredients": [
      "toast",
      "whole wheat wrap",
      "rice",
      "beans",
      "cucumber"
    ],
    "nutrients": {
      "protein": "39g",
      "fat": "27g",
      "carbs": "67g"
    },
    "instructions": "Combine toast, whole wheat wrap, rice, beans and add cucumber. Cook and serve."
  }
];

  await Meal.insertMany(meals)
    .then(() => {
      console.log("Sample meals added");
      mongoose.connection.close();
    })
    .catch(err => console.error(err));
  console.log('Seed data added');
  mongoose.disconnect();
});
