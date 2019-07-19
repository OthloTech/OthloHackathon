FROM node:12.6

RUN apt-get update && apt-get install python3

ADD . /OthloHack
WORKDIR /OthloHack
RUN npm install

CMD ["npm", "start"]

EXPOSE 8080
