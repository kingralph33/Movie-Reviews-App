# Movie Review App

## Prereqs
* Node 24 or higher
* npm or yarn
* Angular 19
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
- Angular 19.2.18 (from 9.1.3) - **Includes security patches**
- Angular Material 19.2.18
- Bootstrap 5.3.3 (from 4.4.1)
- TypeScript 5.7.2 (from 3.8.3)
- Modern build configuration with esbuild

### Security Improvements
- ✅ Fixed XSRF Token Leakage vulnerability (Angular 19.2.16+)
- ✅ Fixed XSS vulnerabilities via unsanitized SVG script attributes (Angular 19.2.18+)
- ✅ Fixed stored XSS vulnerability via SVG Animation, SVG URL and MathML attributes (Angular 19.2.17+)
- Reduced vulnerabilities from 41 to 11 (73% reduction)

### Breaking Changes Fixed
- Updated TypeScript strict mode compatibility
- Migrated to Angular Material's new theming API
- Updated Mongoose deprecated methods
- Updated Express routing for v5 compatibility
- Explicitly marked components as non-standalone for Angular 19 compatibility

