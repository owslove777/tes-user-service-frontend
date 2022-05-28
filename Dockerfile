FROM node:15-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install

FROM node:15-alpine
WORKDIR /app
COPY --from=0 /app/ .
COPY ./ .
RUN npm run build

FROM nginx:1.19
RUN mkdir /app
COPY --from=1 /app/build /app
# COPY ./nginx.conf /etc/nginx/nginx.conf
# COPY ./amdp-base/user-service-frontend/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

