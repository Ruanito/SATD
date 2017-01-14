FROM node:boron

#Install bower
RUN     npm install -g bower

#Create app dictory
RUN      mkdir -p /app
RUN      mkdir -p /app/web
WORKDIR /app

#Install app dependencies
COPY package.json /app/
RUN npm install

WORKDIR /app/web/
COPY web/bower.json /app/web/
RUN bower install --allow-root

#Bundle app source
COPY . /app/

EXPOSE 8080
CMD ["npm", "start"]