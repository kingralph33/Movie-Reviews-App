# Use Node.js 24 (LTS) with development tools
FROM mcr.microsoft.com/devcontainers/javascript-node:24

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install additional tools
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    git \
    vim \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Set up working directory
WORKDIR /workspace
