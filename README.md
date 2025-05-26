# NutriPlan – Meal Planning & Nutrition App

## Overview

**NutriPlan** is a full-stack web application that simplifies personalized meal planning and grocery list creation. This repository contains the complete implementation using Node.js, Express, HTML, CSS, and MongoDB. It also includes detailed setup instructions, design principles, and validation standards to support effective collaboration and high code quality.

## Getting Started

### Prerequisites

Before running this project locally, ensure the following tools and technologies are installed:

- Node.js (v16 or higher)
- npm (comes with Node.js)
- MongoDB (local instance or MongoDB Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/nutriplan.git
   cd nutriplan
   ```

2. **Install project dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and configure the following:

   ```
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Start the server**
   ```bash
   node server.js
   ```

5. **Access the application**

   Open your browser and navigate to: `http://localhost:3000`

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js, Express  
- **Database**: MongoDB (Mongoose)  
- **Testing**: Cypress (End-to-End)  
- **Configuration**: dotenv  

## User Input Validation Rules

- **Email**: Must be a valid email format (e.g., `user@example.com`)
- **Password**: Minimum 8 characters, with at least one number and one special character
- **Meal Preferences**: Required selection from available options
- **Grocery List Items**: Must be generated from the meal plan or validated manually

## Contributing

To contribute to this project:

1. Fork the repository and clone your fork.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes following best practices and standards.
4. Push the branch to your fork:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request describing your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## API Documentation

BASE URL: http://localhost:3000/api


### Auth Routes

1. User Registration : POST /auth/register

Request Body:
{
    "password":"abc123",
    "email":"suba@mail.com",
    "firstName":"suba",
    "lastName":"Thinakaran"
}
Response: 201
{
    "message": "Registered successfully"
}

2. User Login: POST /auth/login 

Request Body:
{
    "password":"abc123",
    "email":"suba@mail.com"
}
Response: 201
{
    "message": "Login successful",
    "user": {
        "_id": "681abc50085517721f9c91b4",
        "firstName": "suba",
        "lastName": "Thinakaran",
        "email": "suba@mail.com",
        "password": "$2b$10$eM.we1yqKp/tEfWp7YuCvOH3pg/KMZrB33ZXE8woAWY1FiC0Vkg6O",
        "__v": 0
    }
}

3. Save User Preferences: POST /user/save

Request Body:
{
    "email": "suba@mail.com",
    "age": 25,
    "height": 168,
    "weight": 58,
    "gender": "female",
    "dietType": "vegetarian",
    "allergies": [
        "nuts"
    ],
    "mealsPerDay": ,
    "activityLevel": "low",
    "goal": "weight loss"
}
Response: 201
{
    "message": "User updated successfully"
}

4. Generate meal plan: POST /meals/generate

Request Body:
{
    "email": "suba@mail.com"
}
Response: 201
{
    "mealPlan": [
        {
            "nutrients": {
                "protein": "24g",
                "fat": "14g",
                "carbs": "70g"
            },
            "_id": "68204234bb91841f6d557425",
            "name": "Tofu Veggie Bowl",
            "diet": "vegetarian",
            "calories": 820,
            "ingredients": [
                "tofu",
                "broccoli",
                "brown rice",
                "carrots",
                "soy sauce"
            ],
            "instructions": "Cook brown rice. Stir-fry tofu and vegetables. Combine and drizzle with soy sauce."
        },
        {
            "nutrients": {
                "protein": "18g",
                "fat": "12g",
                "carbs": "85g"
            },
            "_id": "68204234bb91841f6d557426",
            "name": "Grilled Vegetable Quinoa Salad",
            "diet": "vegetarian",
            "calories": 740,
            "ingredients": [
                "quinoa",
                "zucchini",
                "bell peppers",
                "olive oil",
                "lemon juice"
            ],
            "instructions": "Grill vegetables. Cook quinoa. Toss all with olive oil and lemon juice."
        }
    ],
    "totalCalories": 1612.8
}



## Docker Instructions

### Build the Docker image
## bash:
docker build -t nutriplan-docker-app .

### Run the Docker image
## bash:
docker run --name nutriplan-container -p 3000:3000 nutriplan-docker-app

## MongoDB Notice
This application uses MongoDB Atlas the URI has been hardcoded in the server.js file, since it is a shared cluster and can be accessed from anywhere the app should work as expected.

### To access the app use http://localhost:3000

Student API : http://localhost:3000/api/student

Expected Output:
{
  "name": "Subathira Thinakaran",
  "studentId": "225094537"
}