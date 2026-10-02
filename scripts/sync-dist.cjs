const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const docsDir = path.resolve(__dirname, '..', 'docs');
const root404 = path.resolve(__dirname, '..', '404.html');

if (fs.existsSync(distDir)) {
  const distIndex = path.join(distDir, 'index.html');
  const dist404 = path.join(distDir, '404.html');
  
  if (fs.existsSync(distIndex)) {
    fs.copyFileSync(distIndex, dist404);
    fs.copyFileSync(distIndex, root404);
  }

  // Copy dist to docs
  fs.cpSync(distDir, docsDir, { recursive: true });
  console.log('Successfully synced dist to docs and 404.html');
}
