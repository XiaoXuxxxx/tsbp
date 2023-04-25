FROM node:18-alpine AS deps

WORKDIR /app

RUN corepack enable
COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile


FROM node:18-alpine AS prod-deps

WORKDIR /app

RUN corepack enable
COPY package.json pnpm-lock.yaml ./
COPY --from=deps ./app/node_modules ./node_modules

RUN pnpm install --production --frozen-lockfile 


FROM node:18-alpine AS builder

WORKDIR /app

RUN corepack enable
COPY --from=deps ./app/node_modules ./node_modules
COPY ./src/ ./src/
COPY .swcrc tsconfig.json package.json pnpm-lock.yaml ./

RUN pnpm build


FROM node:18-alpine AS runner

WORKDIR /app

RUN corepack enable
COPY --from=prod-deps ./app/node_modules ./node_modules
COPY --from=builder ./app/dist ./dist
COPY --from=builder ./app/package.json ./package.json

CMD [ "pnpm", "start" ]
