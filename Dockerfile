From node:12

WORKDIR /usr/src/user-app
COPY . .
RUN pwd
RUN ls
RUN npm install
RUN npm run build
CMD [ "node", "./dist/index.js" ]