FROM --platform=linux/amd64 node:alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
RUN npm run build

FROM --platform=linux/amd64 nginx
COPY --from=build /app/dist /usr/share/nginx/html