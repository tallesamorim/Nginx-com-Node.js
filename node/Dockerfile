FROM node:latest

# Command COPY is not needed because in docker-compose.yaml it is using command 'volumes'
# COPY . .

RUN apt update && \
    apt install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

USER node

WORKDIR /usr/src/app
EXPOSE 3000