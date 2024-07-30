ARG NODE_ENV=18

FROM node:${NODE_ENV}-alpine as base
WORKDIR /app
EXPOSE 3000

# Dependancies stage
FROM base as deps
WORKDIR /app
COPY package.json package-lock.json yarn-lock* pnpm-lock.yaml* ./

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm install; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM base as development

ENV NODE_ENV=development
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

EXPOSE 3000

CMD npm run dev
