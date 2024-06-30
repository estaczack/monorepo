FROM node:18.16.0

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm i pkg -g

RUN pkg -t node18-linux app.js

EXPOSE 4000

CMD ["./app"]
