FROM node:12.16.0-alpine3.11

WORKDIR /usr/src/app

# npm ci command does not modify package-lock.json but required both package.json and package-lock.json
COPY package*.json ./

# --no-cache: download package index on-the-fly, no need to cleanup afterwards
# --virtual: bundle packages, remove whole bundle at once, when done
RUN export http_proxy=http://10.12.167.34:8080 \
    && export https_proxy=$http_proxy \
    && apk update \
    && apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm ci \
    && apk del build-dependencies

COPY ./build ./build

EXPOSE 8080

CMD ["npm", "run", "start:prod"]
