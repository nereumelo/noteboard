FROM nginx:1.25.3-alpine

RUN rm /etc/nginx/conf.d/default.conf
RUN apk add bash vim
COPY *.conf /etc/nginx/conf.d
EXPOSE 80