#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM nginx:alpine
EXPOSE 80 
EXPOSE 443
COPY . /usr/share/nginx/html