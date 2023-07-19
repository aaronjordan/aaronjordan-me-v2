FROM node:20-alpine AS build

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build-prod
RUN rm -rf src/ static/ docker-compose.yml

CMD ["npm", "start"]