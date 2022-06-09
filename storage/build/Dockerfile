# build stage
FROM node:16-alpine as build-stage
WORKDIR /var/www/html
RUN apk add --update --no-cache build-base python3
RUN npm install -g yarn --force
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

# deploy stage
FROM nginx:1.21.6-alpine as deploy-stage
WORKDIR /usr/share/nginx/html
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
COPY --from=build-stage /var/www/html/dist /usr/share/nginx/html
COPY --from=build-stage /var/www/html/storage/build/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]


