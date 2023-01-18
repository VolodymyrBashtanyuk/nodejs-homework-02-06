FROM node

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 300

CMD ["node", "server"]