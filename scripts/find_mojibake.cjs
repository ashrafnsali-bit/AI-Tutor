const fs = require('fs');
const path = require('path');

const mojibakePatterns = [
  'ط§ظ', 'ظ…ط', 'ط¹ظ', 'ط¯ظ', 'ظ„ظ', 'ط§ظ„', 'طھط', 'ط±ظ', 'ط³ط', 'ظ‚ط', 'ظˆظ', 'ط¬ط'
];

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory() && e.name !== 'node_modules' && e.name !== '.git' && e.name !== 'dist' && e.name !== 'docs') {
      scanDir(full);
    } else if (e.isFile() && /\.(tsx?|jsx?|json|html|css|md)$/.test(e.name)) {
      const content = fs.readFileSync(full, 'utf8');
      const found = [];
      for (const pattern of mojibakePatterns) {
        if (content.includes(pattern)) {
          found.push(pattern);
        }
      }
      if (found.length > 0) {
        console.log(`FOUND MOJIBAKE in ${full}: patterns [${found.join(', ')}]`);
      }
    }
  }
}

console.log('--- SCANNING PROJECT FOR MOJIBAKE ---');
scanDir('.');
console.log('--- SCAN COMPLETE ---');
