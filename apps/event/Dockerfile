FROM node:18-alpine as development

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build:event

FROM node:18-alpine as production
ENV NODE_ENV=production

USER node
WORKDIR /app

COPY --from=development /app/dist/apps/event ./
# RUN npm install --only=production

# CMD ["npx", "nx", "run", "core:serve"]
