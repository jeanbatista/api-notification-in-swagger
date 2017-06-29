FROM node:8.1.2

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
RUN npm install -g swagger

# Bundle app source
COPY . /usr/src/app

EXPOSE 8010
CMD [ "npm", "start" ]
