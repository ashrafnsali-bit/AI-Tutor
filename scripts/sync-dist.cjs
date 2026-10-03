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
  const rootIndex = path.join(rootDir, 'index.html');
  const root404 = path.join(rootDir, '404.html');
  
  if (fs.existsSync(distIndex)) {
    // Copy production index to 404.html in dist and root for GitHub Pages SPA routing
    fs.copyFileSync(distIndex, dist404);
    fs.copyFileSync(distIndex, root404);
    // Copy production index to root index.html so GitHub Pages serving from / works!
    fs.copyFileSync(distIndex, rootIndex);
  }

  // Copy dist/assets to root assets
  if (fs.existsSync(distAssets)) {
    fs.cpSync(distAssets, rootAssets, { recursive: true });
  }

  // Copy dist to docs
  fs.cpSync(distDir, docsDir, { recursive: true });

  // Create .nojekyll in dist, docs, and root to prevent Jekyll processing
  fs.writeFileSync(path.join(distDir, '.nojekyll'), '');
  fs.writeFileSync(path.join(docsDir, '.nojekyll'), '');
  fs.writeFileSync(path.join(rootDir, '.nojekyll'), '');

  console.log('Successfully synced dist to root, docs, and 404.html for GitHub Pages production');
}
