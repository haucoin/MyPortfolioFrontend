# pull the base image
FROM node:alpine

# set the working direction
WORKDIR /app/front

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/front/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY package-lock.json ./

RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]