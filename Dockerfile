FROM node:13.14.0-alpine

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

CMD npm run start:dev