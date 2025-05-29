# TadaBlue Landing - Deployment Guide

## Rollup Dependency Fix

This project has been optimized to resolve the persistent Rollup dependency issue on Netlify:

### Changes Made:

1. **package.json fixes:**
   - Added Rollup version overrides (`@rollup/rollup-linux-x64-gnu: 4.28.1`)
   - Created Netlify-specific build command (`build:netlify`)
   - Set engine requirements for Node.js >= 18.0.0
   - Removed problematic optional dependencies

2. **netlify.toml optimization:**
   - Node.js version pinned to 18.19.0 (stable LTS)
   - Added NODE_OPTIONS for memory optimization
   - Custom build command with dependency cleanup
   - Build processing optimizations

3. **.npmrc configuration:**
   - Rollup registry fix
   - Dependency resolution optimizations
   - Cache and build optimizations

4. **vite.config.ts improvements:**
   - Manual chunk splitting for better caching
   - Optimized build configuration
   - Better dependency handling

### Build Process:
The build now follows this process:
1. Clean previous builds and cache
2. Fresh npm ci install (no cache issues)
3. TypeScript compilation
4. Vite build with optimizations

### Deployment Status:
Last updated: 2025-05-29 16:26 UTC
Status: Ready for deployment

### Expected Results:
- No more "@rollup/rollup-linux-x64-gnu" errors
- Faster build times on Netlify
- More reliable deployments
- Better chunk optimization for loading