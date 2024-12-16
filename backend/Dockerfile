FROM node:18-alpine
WORKDIR "/app"
COPY package*.json ./
RUN npm install
COPY . .
# Set environment variable to indicate production mode
ENV NODE_ENV=production

# Run the application
CMD ["npm",  "start"]