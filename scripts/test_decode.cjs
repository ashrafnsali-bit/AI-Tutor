const fs = require('fs');

// Let's see how git log had curriculumData.ts before corruption
const { execSync } = require('child_process');

console.log('Searching git history for clean curriculumData.ts...');
const commits = execSync('git log --oneline -n 20 src/data/curriculumData.ts', { encoding: 'utf8' });
console.log('Commits:', commits);
