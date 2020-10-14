FROM node:alpine

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

CMD npm run start:dev