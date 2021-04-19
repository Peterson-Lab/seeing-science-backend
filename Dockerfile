FROM node:15 AS builder

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
COPY yarn.lock ./

RUN yarn

# Bundle app source
COPY tsconfig.json tsconfig.json
COPY prisma prisma
COPY .env .env
COPY .env.example .env.example
COPY src src


RUN yarn gen

RUN yarn build

FROM node:15-alpine AS runtime


WORKDIR /app
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/dist dist
COPY --from=builder /app/.env .env
COPY --from=builder /app/.env.example .env.example





ENV NODE_ENV production
ENV DATABASE_URL postgresql://postgres:postgres@postgres:5432/seeing-science
ENV PORT 8080

EXPOSE 8080

HEALTHCHECK --interval=5s --timeout=5s --retries=3 \
    CMD wget -nv -t1 --spider 'http://localhost:8080' || exit 1


USER node
CMD [ "node", "/app/dist/index.js" ]