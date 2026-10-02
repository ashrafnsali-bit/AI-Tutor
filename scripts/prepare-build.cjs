const fs = require('fs');
const path = require('path');
const rootDir = path.resolve(__dirname, '..');
fs.copyFileSync(path.join(rootDir, 'index.template.html'), path.join(rootDir, 'index.html'));
console.log('Restored index.html template for build');
