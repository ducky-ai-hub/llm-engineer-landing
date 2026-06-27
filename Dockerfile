FROM node:24.18.0-alpine3.23 AS build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

ARG VITE_GOOGLE_SCRIPT_URL
ENV VITE_GOOGLE_SCRIPT_URL=${VITE_GOOGLE_SCRIPT_URL}

RUN yarn build

FROM node:24.18.0-alpine3.23 AS runtime

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY server.mjs ./
COPY --from=build /app/dist ./dist

USER node

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3000/').then(response => { if (!response.ok) process.exit(1) }).catch(() => process.exit(1))"

CMD ["node", "server.mjs"]
