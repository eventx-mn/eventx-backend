FROM node:18-alpine as development

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build:events

FROM node:18-alpine as production
ENV NODE_ENV=production

USER node
WORKDIR /app

COPY --from=development /app/dist/apps/events ./
# RUN npm install --only=production

# CMD ["npx", "nx", "run", "events:serve"]
