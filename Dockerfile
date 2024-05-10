FROM node:16-alpine 

WORKDIR /app

COPY . .

#After "RUN" you can write your env varieble or other command. It works like a regular bash command line
#RUN <your command>

RUN npm install
RUN npm run build

CMD ["npm", "preview"]
