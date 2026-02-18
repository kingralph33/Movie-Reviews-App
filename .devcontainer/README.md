# Dev Container for Movie Reviews App

This directory contains the configuration for developing the Movie Reviews App using VS Code Dev Containers.

## What's Included

- **Node.js 24**: Latest LTS version
- **Angular CLI**: Pre-installed globally
- **MongoDB 7**: Running as a service on port 27017
- **VS Code Extensions**:
  - ESLint
  - Prettier
  - Angular Language Service
  - MongoDB for VS Code
  - Docker

## Getting Started

### Prerequisites

1. **Docker Desktop**: Install from [docker.com](https://www.docker.com/products/docker-desktop)
2. **VS Code**: Install from [code.visualstudio.com](https://code.visualstudio.com/)
3. **Dev Containers Extension**: Install from VS Code marketplace

### Opening the Project

1. Open this folder in VS Code
2. When prompted, click "Reopen in Container"
   - Or use Command Palette (F1) → "Dev Containers: Reopen in Container"
3. Wait for the container to build (first time only, ~2-3 minutes)
4. Dependencies will be installed automatically via `postCreateCommand`

### Development

Once the container is running:

**Terminal 1 - Start Backend Server:**
```bash
node server.js
```

**Terminal 2 - Start Angular Dev Server:**
```bash
cd public
ng serve
```

**Access the Application:**
- Frontend: http://localhost:4200
- Backend API: http://localhost:8000
- MongoDB: localhost:27017 (within container)

## Ports

The following ports are forwarded from the container to your host machine:

| Port | Service | Description |
|------|---------|-------------|
| 4200 | Angular | Frontend development server |
| 8000 | Express | Backend API server |
| 27017 | MongoDB | Database |

## File Sync

The entire workspace is mounted into the container at `/workspace`, so any changes you make in VS Code are immediately reflected in the container and vice versa.

## MongoDB

MongoDB 7 is running as a separate service in the Docker Compose setup. The database is named `movies` and data persists in a Docker volume (`mongodb-data`).

To access MongoDB:
```bash
# From within the container terminal
mongosh mongodb://localhost:27017/movies
```

## Rebuilding the Container

If you need to rebuild the container (e.g., after modifying Dockerfile):

1. Command Palette (F1) → "Dev Containers: Rebuild Container"
2. Wait for rebuild to complete

## Troubleshooting

### Container won't start
- Ensure Docker Desktop is running
- Check Docker Desktop for error messages
- Try rebuilding: "Dev Containers: Rebuild Container"

### Ports already in use
- Stop any local instances of Node.js, Angular CLI, or MongoDB
- Or change port mappings in `devcontainer.json`

### Dependencies not installed
- Run manually: `npm install && cd public && npm install`
- Or rebuild the container

## Benefits of Dev Containers

- ✅ Consistent development environment across team
- ✅ No need to install Node.js, Angular CLI, or MongoDB locally
- ✅ Isolation from your host machine
- ✅ MongoDB automatically configured and running
- ✅ All team members use the same versions of tools
- ✅ Quick onboarding for new developers
