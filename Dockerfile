# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the code
COPY . .

# Expose port (change if needed)
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]