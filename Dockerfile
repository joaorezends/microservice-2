FROM node:18-alpine

WORKDIR /app

COPY . /app

RUN set -x \
    && yarn install --prod

CMD node /app/server.js
