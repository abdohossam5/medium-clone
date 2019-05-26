FROM node:10.15.3

WORKDIR /src/fontend/
COPY ./package*.json ./
RUN npm install -qy
COPY ./ ./
RUN npm run build

EXPOSE 8081

CMD ["npm", "start"]