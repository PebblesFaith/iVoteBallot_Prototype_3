# Use an appropriate Node.js base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /ivoteballot

COPY package.json .

RUN npm install -g nodemon

COPY controllers /ivoteballot/
COPY models /ivoteballot/
COPY Public styles/ivoteballot/

# Copy the rest of your application files to the container

COPY . .

# Copy package.json and package-lock.json to the container
COPY package.json /ivoteballot/
COPY package-lock.json /ivoteballot/

# Install dependencies
RUN npm install

EXPOSE 8080

# Define the command to start your Node.js application
#CMD ["node", "index.js"]

CMD ["npm", "run", "dev"]