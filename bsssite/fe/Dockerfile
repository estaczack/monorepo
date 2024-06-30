FROM node:18.16.0

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm install serve -g

EXPOSE 3000

CMD ["serve", "dist/"]
