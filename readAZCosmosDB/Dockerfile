FROM alpine:latest
RUN apk add --no-cache nodejs npm
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD DEBUG=readazcosmosdb:* npm start
EXPOSE 3000