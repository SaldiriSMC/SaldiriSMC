FROM node:14

WORKDIR /usr/src/node-app
COPY package*.json yarn.lock ./

USER root


RUN npm install
COPY . .


EXPOSE 8081

CMD ["npm", "run", "dev"]
