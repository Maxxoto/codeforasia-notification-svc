FROM node:12.16.1

WORKDIR /service
# ENV PORT 5001

COPY package.json /service/package.json

RUN npm install

COPY . /service

EXPOSE 9000

CMD ["nodemon", "index.js"]