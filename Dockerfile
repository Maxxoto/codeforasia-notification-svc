FROM node:12.16.1

WORKDIR /service

COPY package.json /service/package.json

RUN npm install

# SETUP Timezone
ENV TZ Asia/Jakarta

COPY . /service

EXPOSE 9000

CMD ["node", "index.js"]