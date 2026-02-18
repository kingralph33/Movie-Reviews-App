# GitHub Copilot Instructions for Movie Reviews App

## Project Overview
This is a full-stack Movie Reviews application built with Node.js/Express backend and Angular frontend.

## Technology Stack
- **Backend**: Node.js, Express, MongoDB (Mongoose)
- **Frontend**: Angular, Angular Material, Bootstrap
- **Database**: MongoDB
- **Build Tools**: Angular CLI, npm/yarn

## Architecture
- Backend serves RESTful API at `/api` endpoints
- Frontend is compiled and served from `/public/dist/public`
- Server acts as both API server and static file server for the Angular app

## Code Conventions

### Backend (Node.js/Express)
- Use async/await for asynchronous operations
- Controllers handle business logic
- Models use Mongoose schemas with validation
- Routes are defined in `/server/config/routes.js`
- Use HTTP status codes from standard modules
- Enable CORS for cross-origin requests

### Frontend (Angular)
- Follow Angular style guide
- Use Angular Material components for UI
- Services handle HTTP communication with backend
- Models define TypeScript interfaces/classes
- Routing configured in `app-routing.module.ts`
- Base API URL: `http://localhost:8000/api`

### Database (MongoDB/Mongoose)
- Movie schema includes title and reviews array
- Reviews contain userName, rating (1-5), and review text
- All fields have minimum length validation
- Timestamps enabled (createdAt, updatedAt)

## File Structure
```
/server
  /config
    - database.js (MongoDB connection)
    - routes.js (API routes)
  /controllers
    - movies.controller.js (Business logic)
  /models
    - movie.model.js (Mongoose schema)

/public
  /src
    /app
      /models (TypeScript interfaces)
      /services (HTTP service)
      /movies (Components for list, new, detail, update)
```

## API Endpoints
- `GET /api` - Get all movies
- `POST /api` - Create new movie
- `GET /api/:movie_id` - Get single movie
- `PUT /api/:movie_id` - Update movie (add review)
- `DELETE /api/:movie_id` - Delete movie

## Development Guidelines
1. Keep dependencies up to date
2. Maintain separation between backend and frontend concerns
3. Use TypeScript for Angular components and models
4. Follow RESTful API design patterns
5. Validate data both client-side and server-side
6. Handle errors gracefully with appropriate HTTP status codes

## Running the Application
1. Start MongoDB service
2. Backend: Run `yarn && node server.js` in root directory
3. Frontend: Run `yarn && ng serve` in `/public` directory
4. Access app at `http://localhost:4200`

## Important Notes
- Angular frontend must be built before production deployment
- Server expects compiled Angular app at `/public/dist/public`
- MongoDB must be running on localhost:27017
- Default ports: Backend on 8000, Angular dev server on 4200
