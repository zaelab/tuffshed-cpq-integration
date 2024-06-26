FROM node:20.13

WORKDIR /app

COPY . .

#After "RUN" you can write your env varieble or other command. It works like a regular bash command line
#RUN <your command>

RUN yarn
RUN yarn build

CMD ["node", "server.js"]
