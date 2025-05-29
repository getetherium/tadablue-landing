#!/usr/bin/env node

/**
 * Test script to verify the build process works correctly
 * This helps ensure the Rollup dependency fixes are working
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧪 Testing TadaBlue build process...\n');

try {
  // Clean previous builds
  console.log('1. Cleaning previous builds...');
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
    console.log('   ✅ Cleaned dist folder');
  }

  // Install dependencies
  console.log('\n2. Installing dependencies...');
  execSync('npm ci --prefer-offline --no-audit', { stdio: 'pipe' });
  console.log('   ✅ Dependencies installed successfully');

  // Run TypeScript compilation
  console.log('\n3. Running TypeScript compilation...');
  execSync('npx tsc -b', { stdio: 'pipe' });
  console.log('   ✅ TypeScript compilation successful');

  // Run Vite build
  console.log('\n4. Running Vite build...');
  const buildOutput = execSync('npx vite build --outDir dist', { stdio: 'pipe', encoding: 'utf8' });
  console.log('   ✅ Vite build successful');

  // Check if dist folder exists and has files
  console.log('\n5. Verifying build output...');
  if (fs.existsSync('dist')) {
    const files = fs.readdirSync('dist');
    console.log(`   ✅ Build output created with ${files.length} files`);
    
    if (files.includes('index.html')) {
      console.log('   ✅ index.html found');
    }
    
    const assetsDir = path.join('dist', 'assets');
    if (fs.existsSync(assetsDir)) {
      const assetFiles = fs.readdirSync(assetsDir);
      console.log(`   ✅ Assets folder created with ${assetFiles.length} files`);
    }
  } else {
    throw new Error('dist folder not created');
  }

  console.log('\n🎉 BUILD TEST SUCCESSFUL!');
  console.log('The Rollup dependency fixes are working correctly.');
  console.log('The project is ready for Netlify deployment.');

} catch (error) {
  console.error('\n❌ BUILD TEST FAILED!');
  console.error('Error:', error.message);
  
  if (error.stdout) {
    console.error('\nSTDOUT:', error.stdout.toString());
  }
  
  if (error.stderr) {
    console.error('\nSTDERR:', error.stderr.toString());
  }
  
  process.exit(1);
}