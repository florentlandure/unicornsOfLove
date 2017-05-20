FROM node:boron

# Create app directory
RUN mkdir -p /unicorns

# Change directory
WORKDIR /unicorns

COPY package.json /unicorns

# Install dependecies
RUN yarn

# Copy all our code
COPY . /unicorns

EXPOSE 4200

# Serve the app
CMD ["npm", "start"]
