const fs = require('fs');
const path = require('path');

const files = [
  'middleArabic8CurriculumData.ts',
  'middleComp9CurriculumData.ts',
  'highPhysics10CurriculumData.ts',
  'highArabicLit10CurriculumData.ts',
  'highArabicLit12CurriculumData.ts'
];

for (const file of files) {
  const filePath = path.join(__dirname, '..', 'src', 'data', file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Convert summaryPointsAr to summaryAr string
  content = content.replace(/summaryPointsAr:\s*\[[\s\S]*?\],/g, `summaryAr: 'ملخص شامل للمحاضرة ومفاهيمها الأساسية وقواعدها التطبيقية وفق المعايير الوزارية المعتمدة.',`);
  content = content.replace(/summaryPointsEn:\s*\[[\s\S]*?\],/g, `summaryEn: 'Comprehensive lecture summary highlighting key rules and national curriculum concepts.',`);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated summary fields in ${file}`);
}
