# Fullstack App Scaffold

A production-ready TypeScript Express.js app with PostgreSQL (Prisma), MongoDB (Mongoose), and Redis (ioredis) support.

## Features
- PostgreSQL with Prisma ORM
- MongoDB with Mongoose ODM
- Redis caching and rate limiting
- JWT authentication (register/login)
- User profile and product CRUD APIs
- Zod for input validation
- Modular, clean architecture
- Jest & Supertest for testing

## Packages & Dependencies

### Core Framework
- **express** (`^4.19.2`) - Fast, unopinionated web framework for Node.js
- **@types/express** (`^4.17.21`) - TypeScript definitions for Express

### Database & ORM/ODM
- **@prisma/client** (`^5.12.0`) - Type-safe database client for PostgreSQL
- **prisma** (`^5.12.0`) - Database toolkit and ORM for Node.js
- **mongoose** (`^8.3.2`) - MongoDB object modeling for Node.js

### Caching & Session Management
- **ioredis** (`^5.4.1`) - Robust Redis client for Node.js

### Authentication & Security
- **jsonwebtoken** (`^9.0.2`) - JWT implementation for Node.js
- **@types/jsonwebtoken** (`^9.0.8`) - TypeScript definitions for JWT
- **bcryptjs** (`^2.4.3`) - Library for hashing passwords
- **@types/bcryptjs** (`^2.4.2`) - TypeScript definitions for bcryptjs

### Input Validation & Schema
- **zod** (`^3.22.4`) - TypeScript-first schema validation library

### Environment & Configuration
- **dotenv** (`^16.4.5`) - Load environment variables from .env file

### HTTP Middleware
- **cors** (`^2.8.5`) - Cross-Origin Resource Sharing middleware
- **@types/cors** (`^2.8.19`) - TypeScript definitions for CORS
- **morgan** (`^1.10.0`) - HTTP request logger middleware
- **@types/morgan** (`^1.9.10`) - TypeScript definitions for Morgan

### Development & Build Tools
- **typescript** (`^5.4.5`) - TypeScript compiler
- **ts-node** (`^10.9.2`) - TypeScript execution engine for Node.js
- **@types/node** (`^20.11.30`) - TypeScript definitions for Node.js

### Testing
- **jest** (`^29.7.0`) - JavaScript testing framework
- **ts-jest** (`^29.1.1`) - Jest transformer for TypeScript
- **@types/jest** (`^30.0.0`) - TypeScript definitions for Jest
- **supertest** (`^6.3.3`) - HTTP testing library for Express
- **@types/supertest** (`^2.0.16`) - TypeScript definitions for Supertest

## Setup
1. Copy `.env.example` to `.env` and fill in your values.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Generate Prisma client:
   ```sh
   npx prisma generate
   ```
4. Run database migrations:
   ```sh
   npx prisma migrate dev --name init
   ```
5. Start the app:
   ```sh
   npm run dev
   ```

## Project Structure
```
src/
  config/         # Database & Redis setup
  models/         # Prisma & Mongoose schemas
  routes/         # Express routers (auth, user, product, etc.)
  controllers/    # Request logic (auth, user, product, etc.)
  middlewares/    # Auth, rate limiting
  services/       # Business logic (auth, user, product, redis, etc.)
  types/          # Shared TypeScript types
  index.ts        # Main entry point
```

## API Endpoints

### Authentication
- `POST /api/v1/register` - Register a new user
- `POST /api/v1/login` - Login user

### User
- `GET /api/v1/user/profile` - Get user profile (protected)

### Product
- `POST /api/v1/product/` - Create a new product
- `GET /api/v1/product/` - List all products
- `GET /api/v1/product/:id` - Get product by ID
- `PUT /api/v1/product/:id` - Update product by ID
- `DELETE /api/v1/product/:id` - Delete product by ID

## Environment Variables
Create a `.env` file with the following variables:
- `DATABASE_URL` - PostgreSQL connection string
- `MONGODB_URI` - MongoDB connection string
- `REDIS_URL` - Redis connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `PORT` - Server port (default: 3000) 