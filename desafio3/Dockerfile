FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm i -g @nestjs/cli@7.4.1

RUN npm install --save @nestjs/typeorm typeorm sqlite3

USER node

COPY /app-fullcycle4-d3/. /home/node/app

WORKDIR /home/node/app

CMD ["npm", "run", "start:dev"]