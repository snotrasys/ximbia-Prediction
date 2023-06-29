# build environment
FROM  node:16-alpine3.16
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app
RUN npm install -g pnpm
# ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . /app

RUN pnpm install
CMD ["pnpm","run", "build"]
CMD ["pnpm","run", "start"]