FROM node:18-alpine
WORKDIR "/app"
COPY package*.json ./
RUN npm install
COPY . .
# Run the application
# Seed the database
# RUN npm run seed
# CMD ["npm", "run", "dev"]