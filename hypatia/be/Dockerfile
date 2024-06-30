FROM node:18.16.0

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 4000

CMD ["node", "app.js"]
