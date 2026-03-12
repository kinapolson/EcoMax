    FROM node:20-alpine AS build
    WORKDIR /app

    COPY package*.json ./
    RUN npm ci

    COPY . .
    RUN npx expo export --platform web

    FROM nginx:alpine

    RUN apk add --no-cache tesseract-ocr tesseract-ocr-data-eng
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    COPY --from=build /app/dist /usr/share/nginx/html

    EXPOSE 80
