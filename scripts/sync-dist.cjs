const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const docsDir = path.join(rootDir, 'docs');
const rootAssets = path.join(rootDir, 'assets');
const distAssets = path.join(distDir, 'assets');

if (fs.existsSync(distDir)) {
  const distIndex = path.join(distDir, 'index.html');
  const dist404 = path.join(distDir, '404.html');
  const root404 = path.join(rootDir, '404.html');
  
  if (fs.existsSync(distIndex)) {
    fs.copyFileSync(distIndex, dist404);
    fs.copyFileSync(distIndex, root404);
  }

  // Copy dist/assets to root assets
  if (fs.existsSync(distAssets)) {
    fs.cpSync(distAssets, rootAssets, { recursive: true });
  }

  // Copy dist to docs
  fs.cpSync(distDir, docsDir, { recursive: true });

  // Ensure root index.html is ALWAYS the clean dev template with /src/main.tsx
  const templatePath = path.join(rootDir, 'index.template.html');
  const rootIndex = path.join(rootDir, 'index.html');
  if (fs.existsSync(templatePath)) {
    fs.copyFileSync(templatePath, rootIndex);
  }

  console.log('Successfully synced dist to docs and preserved dev index.html');
}
