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

  // Copy public image assets to dist, docs, and root for Open Graph & WhatsApp link preview
  const publicDir = path.join(rootDir, 'public');
  const imgFiles = ['og-image.jpg', 'og-preview.jpg', 'logo.jpg', 'logo.png', 'apple-touch-icon.png', 'favicon.png', 'favicon-32x32.png'];
  imgFiles.forEach(f => {
    const src = path.join(publicDir, f);
    if (fs.existsSync(src)) {
      try { fs.copyFileSync(src, path.join(distDir, f)); } catch {}
      try { fs.copyFileSync(src, path.join(docsDir, f)); } catch {}
      try { fs.copyFileSync(src, path.join(rootDir, f)); } catch {}
    }
  });

  console.log('Successfully synced dist to root, docs, and 404.html for GitHub Pages production');
}
