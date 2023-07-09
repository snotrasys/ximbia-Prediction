# build environment
FROM  node:16-alpine3.16 as build
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app
# RUN npm install -g pnpm
RUN pnpm add -g pnpm
# ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . /app

RUN pnpm install
RUN pnpm run build
# CMD ["pnpm","run", "build"]

# production environment
# FROM nginx:stable-alpine
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
# CMD ["pnpm","run", "start"]

FROM  node:16-alpine3.16 
# RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app
# RUN npm install -g pnpm
RUN pnpm add -g pnpm
# ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY --from=build /app /app
RUN pnpm install
CMD ["pnpm","run", "start"]
