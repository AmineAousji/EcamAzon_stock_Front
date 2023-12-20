# Use a Node.js image to run the Angular project
FROM node:18.13-alpine

# Set the working directory inside the container
WORKDIR /app

RUN npm install -g @angular/cli

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json /app/

# Install npm dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the Angular project files into the container
COPY . /app

# The default port the ng serve uses is 4200, but we'll map it to 30002 as specified
EXPOSE 30002

# Start the Angular app using `npm start`
CMD ["npm", "start"]
# CMD ["ng", "serve", "--host", "127.0.0.1", "--port", "30002"]
