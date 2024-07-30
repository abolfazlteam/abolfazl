ARG NODE_VERSION=18

FROM node:${NODE_VERSION}-alpine as base

WORKDIR /app

# Dependancies stage
FROM base as deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml ./
RUN \
  if [ -f yarn.lock]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json]; then npm ci; \
  elif [ -f pnpm-lock.yaml]; then corepack enable pnpm & pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi



# Building stage
FROM base as builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
# build script
RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Production stage
FROM base as production
WORKDIR /app

# set env variable to production
ENV NODE_ENV=production

# copy node_modules
COPY --from=deps /app/node_modules ./node_modules

# Add a non-root user for security reasons
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copy some stuff from builder stage - nextjs build some files and folders
COPY --from=builder --chown=nextjs /app/.next ./next
COPY --from=builder /app/node_modules /node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
# RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

# we did not user npm start as we used server.js file which is faster - https://nextjs.org/docs/app/api-reference/next-config-js/output
# server.js is created by next build from the standalone output
CMD HOSTNAME="0.0.0.0" node server.js