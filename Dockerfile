ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package.json package-lock.json ./

# RUN npm ci
RUN npm install

COPY . .

EXPOSE 3000

CMD npm run dev