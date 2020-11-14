FROM node:13.14.0-alpine

RUN npm i -g pushstate-server

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

EXPOSE 3000

CMD npm run start:dev