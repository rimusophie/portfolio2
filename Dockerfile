FROM node:20.11.1
WORKDIR /var/www/portfolio2
#WORKDIR /var/www
RUN apt update
RUN npm install @vue/cli @vue/cli-init
# Viteのサーバーにローカルからアクセスするために開ける
EXPOSE 5173
