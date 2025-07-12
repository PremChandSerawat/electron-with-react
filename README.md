# React + Electron + Material-UI

A modern Electron application built with React, TypeScript, and Material-UI.

## Features

- ⚡ **Electron** - Cross-platform desktop application framework
- ⚛️ **React 18** - Modern React with hooks and functional components
- 🔷 **TypeScript** - Type-safe development
- 🎨 **Material-UI (MUI)** - Beautiful, accessible React components
- 🚀 **Vite** - Fast build tool and development server
- 📦 **Electron Forge** - Complete tooling for Electron apps

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm start
```

This will:
- Start the Electron app in development mode
- Open the app with DevTools enabled
- Enable hot reloading for both main and renderer processes

### Building

Build the application for production:
```bash
npm run make
```

This creates distributable packages for your platform.

### Available Scripts

- `npm start` - Start the Electron app in development mode
- `npm run package` - Package the app without creating distributables
- `npm run make` - Make distributable packages
- `npm run dev` - Start Vite dev server (for web development)
- `npm run build` - Build the web app with Vite
- `npm run preview` - Preview the built web app

## Project Structure

```
src/
├── index.ts          # Main Electron process
├── preload.ts        # Preload script for secure IPC
├── index.html        # HTML template
├── main.tsx          # React entry point
├── App.tsx           # Main React component
└── index.css         # Global styles
```

## Technology Stack

- **Electron** - Desktop application framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Material-UI** - Component library
- **Vite** - Build tool
- **Electron Forge** - Packaging and distribution

## Development Notes

- The app uses context isolation for security
- Material-UI theme is configured in `main.tsx`
- TypeScript strict mode is enabled
- Hot reloading works for both main and renderer processes

## License

MIT 