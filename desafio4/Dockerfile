FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

RUN mkdir -p /home/node/app
RUN npm config set cache /home/node/app/.npm-cache --global

ENV PATH /home/node/app/node_modules/.bin:$PATH
ENV CI=true

COPY package.json /home/node/app
COPY package-lock.json /home/node/app

RUN npm install
RUN npm install react-scripts@3.4.0 -g

USER node

COPY . /home/node/app

WORKDIR /home/node/app

EXPOSE 3000
CMD ["npm", "start"]