# OKR Programming Challenge API

A RESTful API service built with NestJS for managing OKRs (Objectives and Key Results) in a programming challenge context.

## Features

- RESTful API endpoints for OKR management
- Swagger UI documentation
- TypeScript support
- Comprehensive test coverage
- ESLint and Prettier configuration
- Environment-based configuration

## Prerequisites

- Node.js (v18 or higher)
- pnpm (v9.15.4 or higher)

## Installation

```bash
# Install dependencies
pnpm install

# Copy environment variables template
cp .env.example .env
```

## Environment Variables

The application uses environment variables for configuration. Create a `.env` file in the root directory with the following variables:

```env
# Constant Contact API Configuration
CONSTANT_CONTACT_API_BASE_URL=https://api.cc.email/v3
```

See `.env.example` for a complete list of required environment variables.

## Development

```bash
# Start development server
pnpm run start:dev

# Build the project
pnpm run build

# Run in production mode
pnpm run start:prod
```

## Testing

```bash
# Run unit tests
pnpm run test

# Run e2e tests
pnpm run test:e2e

# Generate test coverage report
pnpm run test:cov
```

## API Documentation

Once the server is running, you can access the Swagger UI documentation at:
```
http://localhost:3000/api
```

## Project Structure

```
src/
├── constant-contact/  # Constant Contact API integration
├── contact/          # Contact management
├── task/            # Task management
├── app.module.ts    # Main application module
└── main.ts         # Application entry point
```

## Code Quality

```bash
# Run linter
pnpm run lint

# Format code
pnpm run format
```

## License

UNLICENSED
