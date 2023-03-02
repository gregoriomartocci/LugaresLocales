# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory
WORKDIR /src

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the app's port
EXPOSE 4000

# Run the app
CMD [ "npm", "run", "start:dev" ]