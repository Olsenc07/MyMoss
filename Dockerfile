# Step 1: Build Backend & React SSR
FROM node:18.20.2 as build-step

# Set working directory in container
WORKDIR /app

# Copy package.json & package-lock.json to work directory
COPY package*.json ./

# Install needed packages specified in package*.json
RUN npm run install

# Copy rest of source code from host to image filesystem
COPY . .

# Build React app
RUN npm run build

# Step 2: Setup server using same Node.js image
FROM node:18.20.2

# Set the working directory in this new stage
WORKDIR /app

# Copy the built application from the previous step
COPY --from=build-step /app/build /app/build
COPY --from=build-step /app/backend /app/backend
COPY --from=build-step /app/node_modules /app/node_modules
COPY --from=build-step /app/package*.json ./

# Expose port 3000 to the outside once the container has launched
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
CMD ["node", "server.js"]