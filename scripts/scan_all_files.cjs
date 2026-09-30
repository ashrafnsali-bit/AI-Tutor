const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        results = results.concat(walk(full));
      }
    } else if (/\.(ts|tsx|html|css|json|js|cjs)$/.test(file)) {
      results.push(full);
    }
  });
  return results;
}

const allFiles = walk(path.join(__dirname, '..', 'src')).concat(
  walk(path.join(__dirname, '..', 'docs')),
  [path.join(__dirname, '..', 'index.html')]
);

console.log('Scanning', allFiles.length, 'files for Mojibake:');
const mojibakeFiles = [];

allFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('ط§ظ') || content.includes('ظ…ط') || content.includes('طھط') || content.includes('ظپظ')) {
    mojibakeFiles.push({ file: f, length: content.length });
    console.log('Mojibake found in:', path.relative(path.join(__dirname, '..'), f));
  }
});

console.log('\nTotal files with Mojibake:', mojibakeFiles.length);
