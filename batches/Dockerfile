FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

RUN npm install -g typescript

COPY . .

RUN tsc

EXPOSE 8081

CMD ["node", "lib/index.js"]
