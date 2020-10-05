# Stage 1 angular application
FROM node:14.3.0-slim as build-stage-1

LABEL author="strategic development lab"

WORKDIR /app

COPY package*.json /app/

RUN npm ci --quiet -- --only=prod

COPY . /app

RUN npm run build -- --output-path=dist

# Stage 2 nginx http server
FROM nginx:1.18.0-alpine

COPY --from=build-stage-1 /app/nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-stage-1 /app/dist /usr/share/nginx/html
