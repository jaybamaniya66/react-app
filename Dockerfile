#Stage Build:
FROM node:18 as build

WORKDIR /app

COPY package.json ./

RUN npm install 

COPY . .

RUN npm run build

RUN ls -la /app/dist

#Serve
FROM nginx:alpine

# RUN rm -rf /etc/nginx/conf.d/default.conf

# COPY default.conf /etc/nginx/conf.d/

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]