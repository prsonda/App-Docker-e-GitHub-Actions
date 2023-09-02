FROM node:16

WORKDIR /app

COPY prisma ./prisma
COPY src ./src

COPY package*.json ./

RUN yarn install

COPY . .

CMD [ "yarn", "start" ]
