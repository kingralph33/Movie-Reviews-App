# Movie Reviews App - Claude AI Context

## Project Overview

This is a full-stack Movie Reviews application that allows users to submit movies and write reviews. The app was originally built with Angular 9 and Node 12 (5+ years ago) and has been modernized to Angular 19 and Node 24+ with critical security patches.

## Technology Stack

### Backend
- **Node.js**: 24+
- **Express**: 5.2.1
- **MongoDB**: 7 (with Mongoose 9.2.1 ODM)
- **CORS**: For cross-origin resource sharing

### Frontend
- **Angular**: 19.2.18
- **Angular Material**: 19.2.18 (UI components)
- **Bootstrap**: 5.3.3 (CSS framework)
- **TypeScript**: 5.7.2
- **RxJS**: 7.8.1 (reactive programming)

### Build Tools
- **Angular CLI**: 19.2.18
- **esbuild**: Modern bundler (via Angular 19)

## Project Structure

```
Movie-Reviews-App/
├── .devcontainer/          # VS Code dev container configuration
│   ├── devcontainer.json   # Dev container settings
│   ├── docker-compose.yml  # Docker Compose for app + MongoDB
│   └── Dockerfile          # Container image definition
├── .github/
│   └── copilot-instructions.md  # GitHub Copilot guidelines
├── server/                 # Backend (Node.js/Express)
│   ├── config/
│   │   ├── database.js     # MongoDB connection
│   │   └── routes.js       # API route definitions
│   ├── controllers/
│   │   └── movies.controller.js  # Business logic
│   └── models/
│       └── movie.model.js  # Mongoose schema
├── public/                 # Frontend (Angular)
│   ├── src/
│   │   ├── app/
│   │   │   ├── models/     # TypeScript interfaces
│   │   │   ├── services/   # HTTP service
│   │   │   └── movies/     # Components (list, new, detail, update)
│   │   ├── environments/   # Environment configs
│   │   └── styles.scss     # Global styles with Material theming
│   ├── angular.json        # Angular workspace config
│   ├── package.json        # Frontend dependencies
│   └── tsconfig.json       # TypeScript config
├── server.js               # Express server entry point
├── package.json            # Backend dependencies
└── README.md               # Project documentation
```

## Database Schema

### Movie Model
```javascript
{
  title: String (required, minlength: 3),
  reviews: [{
    userName: String (required, minlength: 3),
    rating: Number (required, 1-5),
    review: String (required, minlength: 3)
  }],
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

## API Endpoints

All API endpoints are prefixed with `/api`:

- `GET /api` - Get all movies
- `POST /api` - Create new movie with initial review
- `GET /api/:movie_id` - Get single movie by ID
- `PUT /api/:movie_id` - Add a new review to existing movie
- `DELETE /api/:movie_id` - Delete movie by ID

## Application Routes (Frontend)

- `/movies` - List all movies (default route)
- `/movies/new` - Form to submit new movie with review
- `/movies/:id` - Display movie details and all reviews
- `/movies/:id/review` - Form to add new review to existing movie

## Development Workflow

### Using Dev Containers (Recommended)

1. Open the project in VS Code
2. Click "Reopen in Container" when prompted (or use Command Palette > "Dev Containers: Reopen in Container")
3. Container includes:
   - Node.js 24
   - Angular CLI pre-installed
   - MongoDB 7 running on port 27017
   - All dependencies pre-installed via `postCreateCommand`

### Without Dev Containers

1. **Prerequisites**: Node 24+, npm/yarn, MongoDB 7+
2. **Backend Setup**:
   ```bash
   npm install
   node server.js  # Runs on port 8000
   ```
3. **Frontend Setup**:
   ```bash
   cd public
   npm install
   ng serve  # Runs on port 4200
   ```

## Key Architectural Decisions

### Backend

1. **Express 5 Compatibility**:
   - Uses built-in `express.json()` and `express.urlencoded()` instead of body-parser
   - Catch-all route uses `app.use()` instead of deprecated `app.all("*")`

2. **Mongoose 9 Best Practices**:
   - No deprecated connection options (removed `useNewUrlParser`, `useUnifiedTopology`, etc.)
   - Uses `findByIdAndDelete()` instead of deprecated `findByIdAndRemove()`

3. **Static File Serving**:
   - Express serves compiled Angular app from `/public/dist/public`
   - API routes handled first, then catch-all for SPA routing

### Frontend

1. **NgModule Architecture** (not standalone components):
   - All components explicitly marked with `standalone: false`
   - Traditional NgModule pattern maintained for compatibility

2. **Angular Material Theming**:
   - Uses modern `@use` syntax instead of `@import`
   - Theme defined with `mat.define-theme()` API

3. **TypeScript Strict Mode**:
   - All properties have explicit initializers
   - Strict type checking enabled

## Code Conventions

### Backend (Node.js/Express)
- Use async/await for asynchronous operations
- Controllers handle business logic, routes define endpoints
- HTTP status codes from `@status/codes` package
- Enable CORS for development

### Frontend (Angular)
- Follow Angular style guide
- Use Angular Material components for UI consistency
- Services handle all HTTP communication
- Models define TypeScript interfaces/classes
- Components are non-standalone (use NgModule)

### Database (MongoDB/Mongoose)
- All fields validated at schema level
- Use `findByIdAndDelete()` for deletions
- Timestamps enabled automatically (createdAt, updatedAt)

## Recent Modernization (2026)

### Security Fixes Applied
- ✅ XSRF token leakage via protocol-relative URLs (CVE patched in Angular 19.2.16+)
- ✅ XSS via unsanitized SVG script attributes (patched in Angular 19.2.18)
- ✅ Stored XSS via SVG animation/URL/MathML attributes (patched in Angular 19.2.17)
- Vulnerabilities reduced from 41 to 11 (73% reduction)

### Breaking Changes Addressed
- Added `standalone: false` to all component decorators
- Migrated Material theming from `@import` to `@use`
- Updated TypeScript for strict mode compliance
- Modernized build configuration to use esbuild

## Important Notes

### For Development
- MongoDB must be running on `localhost:27017` (automatic in dev container)
- Backend runs on port `8000`
- Angular dev server runs on port `4200`
- Frontend makes API calls to `http://localhost:8000/api`

### For Production
- Angular app must be built first: `cd public && ng build`
- Build output goes to `/public/dist/public`
- Express serves compiled Angular app automatically
- Set `NODE_ENV=production` for production mode

### Common Tasks

**Start Development Servers**:
```bash
# Terminal 1 - Backend
npm install
node server.js

# Terminal 2 - Frontend
cd public
npm install
ng serve
```

**Build for Production**:
```bash
cd public
ng build --configuration=production
```

**Run Tests**:
```bash
cd public
ng test
```

## Stored Memories (Context from Previous Sessions)

1. **Mongoose deprecated methods**: Use `findByIdAndDelete()` instead of `findByIdAndRemove()` in Mongoose 9
2. **Angular Material theming**: Use `@use '@angular/material' as mat;` syntax for theming
3. **Express compatibility**: Express 5 requires catch-all routes to use `app.use()` instead of `app.all("*")`
4. **Package versions**: App uses Express 5.2.1, Mongoose 9.2.1, Angular 19.2.18

## Files to Avoid Committing

- `/node_modules/` (both root and public)
- `/dist/` and `/out-tsc/` (build artifacts)
- `/public/dist/` (compiled Angular app)
- `*.log` files
- `.DS_Store` (macOS)
- Coverage reports

## External Documentation

- [Angular 19 Docs](https://angular.io/docs)
- [Angular Material 19](https://material.angular.io/)
- [Express 5 Guide](https://expressjs.com/en/guide/migrating-5.html)
- [Mongoose 9 Docs](https://mongoosejs.com/docs/guide.html)
- [MongoDB 7 Manual](https://www.mongodb.com/docs/manual/)
