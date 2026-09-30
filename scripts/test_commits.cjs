const { execSync } = require('child_process');
const fs = require('fs');

['c806d4d', '033a16a', '0735a56'].forEach(commit => {
  try {
    const raw = execSync(`git show ${commit}:src/data/curriculumData.ts`, { maxBuffer: 10 * 1024 * 1024 });
    const str = raw.toString('utf8');
    const hasMojibake = str.includes('ط§ظ„ظ');
    console.log(`Commit ${commit}: length=${raw.length}, hasMojibake=${hasMojibake}`);
    const lines = str.split('\n').slice(20, 30);
    console.log(`Sample lines from ${commit}:\n`, lines.join('\n'));
  } catch (e) {
    console.log(`Error reading ${commit}:`, e.message);
  }
});
