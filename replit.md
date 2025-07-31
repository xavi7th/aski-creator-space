# Enski - Course Creator Platform

## Overview

Enski is a modern web application designed for course creators to build professional storefronts and landing pages. The platform features a React frontend with a Node.js/Express backend, utilizing PostgreSQL for data persistence and a comprehensive UI component library built on shadcn/ui.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for RESTful API endpoints
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: PostgreSQL-based session storage

### Key Design Decisions

**Monorepo Structure**: The application uses a shared codebase approach with separate `client/`, `server/`, and `shared/` directories, allowing for type sharing between frontend and backend.

**Component-First UI**: Leverages shadcn/ui for consistent, accessible, and customizable components with a comprehensive design system including custom colors, shadows, and gradients.

**Type Safety**: Full TypeScript implementation across the stack with shared schema definitions using Drizzle and Zod for validation.

## Key Components

### Frontend Pages
- **Overview**: Landing page showcasing platform features and navigation
- **Creator Storefront**: Customizable storefront builder with profile management, testimonials, portfolio sections, and settings
- **Page Builder**: Drag-and-drop page builder with responsive design tools and multiple content block types
- **Navigation**: Consistent navigation component with active state management

### Backend Services
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) for development
- **Route Registration**: Modular route handling system with middleware support
- **Development Server**: Vite integration for hot module replacement in development

### Shared Components
- **Schema Definitions**: Centralized database schema and validation rules
- **Type Exports**: Shared TypeScript interfaces and types

## Data Flow

### Frontend to Backend
1. React components use TanStack Query for API calls
2. Generic `queryClient` handles HTTP requests with error handling
3. API requests follow RESTful conventions with `/api` prefix
4. Form validation uses React Hook Form with Zod resolvers

### Database Operations
1. Drizzle ORM provides type-safe database queries
2. Schema definitions in `shared/schema.ts` ensure consistency
3. Storage interface allows for easy switching between implementations
4. Current implementation uses in-memory storage for development

### State Management
1. Server state managed by TanStack Query with caching
2. Local component state using React hooks
3. Form state handled by React Hook Form
4. UI state (modals, toggles) managed locally

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: PostgreSQL connection for production deployment
- **drizzle-orm**: Type-safe ORM with PostgreSQL support
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form handling with validation
- **wouter**: Lightweight routing solution

### UI and Styling
- **@radix-ui/**: Comprehensive primitive component library
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Tools
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: JavaScript bundler for production builds

## Deployment Strategy

### Development Environment
- Vite dev server for frontend with HMR
- tsx for backend TypeScript execution
- In-memory storage for rapid development
- Replit-specific plugins for development environment integration

### Production Build
1. Frontend built with Vite to `dist/public`
2. Backend bundled with esbuild to `dist/index.js`
3. Static assets served by Express in production
4. Database migrations managed through Drizzle Kit

### Database Strategy
- Development: In-memory storage (MemStorage class)
- Production: PostgreSQL via Neon Database
- Migration system: Drizzle Kit with `db:push` command
- Schema versioning through `migrations/` directory

### Environment Configuration
- `NODE_ENV` based environment detection
- Database URL configuration through environment variables
- Conditional middleware and plugin loading for development vs production