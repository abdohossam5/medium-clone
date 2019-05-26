FROM node:10.15.3

WORKDIR /src/backend/
COPY ./package*.json ./
RUN npm install -qy
COPY ./ ./

# set default node environment as production to ignore dev dependencies
# this will be overridden in development by passing --build-arg NODE_ENV=dev
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

EXPOSE 3000

CMD ["npm", "start"]