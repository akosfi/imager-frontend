FROM node:13.14.0-alpine as builder

WORKDIR /app

COPY package*.json /app/

RUN npm i

COPY ./ /app/

RUN npm run build

FROM nginx:1.15

COPY --from=builder /app/build/ /usr/share/nginx/html

COPY --from=builder /app/nginx.conf /