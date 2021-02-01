FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 2023

RUN npm run build
CMD ["npm", "run", "dev"]