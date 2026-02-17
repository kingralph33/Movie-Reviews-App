# Movie Review App

## Prereqs
* Node 24 or higher
* npm or yarn
* Angular 18
* MongoDB

## Running the apps

1. Node Server
   1. In the root directory run `yarn` or `npm install`
   1. Next, run `node server.js`

1. Angular App
   1. In the public directory run `yarn` or `npm install`
   1. Next, run `ng serve` (or `npm start`)
   1. More instructions inside of the `./public/README.md`

## Recent Updates (2026)

This application has been updated with the following modern package versions:

### Backend (Node.js/Express)
- Express 5.2.1 (from 4.16.4)
- Mongoose 9.2.1 (from 5.4.12)
- Removed body-parser (now built into Express)
- Updated all other dependencies to latest versions

### Frontend (Angular)
- Angular 18.2.14 (from 9.1.3)
- Angular Material 18.2.14
- Bootstrap 5.3.3 (from 4.4.1)
- TypeScript 5.5.4 (from 3.8.3)
- Modern build configuration with esbuild

### Breaking Changes Fixed
- Updated TypeScript strict mode compatibility
- Migrated to Angular Material's new theming API
- Updated Mongoose deprecated methods
- Updated Express routing for v5 compatibility

