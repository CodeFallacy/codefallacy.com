FROM node:22-alpine AS builder
WORKDIR /app

COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN npm i -g pnpm
RUN pnpm install

COPY . .
RUN pnpm run build
RUN pnpm prune --production

FROM node:22-alpine

ARG CAPTCHAKEY
ARG PB_URL

WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .

ENV PORT=3000
ENV NODE_ENV=production
# ENV CAPTCHAKEY=${CAPTCHAKEY}
# ENV PB_URL=${PB_URL}
# ENV NODE_OPTIONS="--max-old-space-size=1024"

EXPOSE ${PORT}
CMD [ "node", "build" ]