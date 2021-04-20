FROM node:15

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
COPY yarn.lock ./

RUN yarn

# Bundle app source
COPY prisma prisma
RUN yarn gen


COPY .env .env
COPY .env.example .env.example
COPY tsconfig.json tsconfig.json
COPY src src
RUN yarn build

COPY .env.production .env


ENV NODE_ENV production
ENV PORT 8080

EXPOSE 8080

HEALTHCHECK --interval=5s --timeout=5s --retries=3 \
    CMD wget -nv -t1 --spider 'http://localhost:8080' || exit 1


USER node
CMD [ "node", "/app/dist/index.js" ]