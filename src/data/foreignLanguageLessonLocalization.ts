import type { Lecture, Subject } from '../types';

// Foreign-language courses must be taught in the target language, so the
// "Ar" text slots are overwritten with the target-language ("En") text.
const FOREIGN_LANGUAGE_SUBJECTS: ReadonlySet<string> = new Set<Subject>(['ENGLISH', 'FRENCH', 'GERMAN', 'ITALIAN']);

// Course metadata that stays in Arabic at the top level of a lecture.
const KEEP_ARABIC_TOP_LEVEL = new Set([
  'ministryAr',
  'gradeLevelNameAr',
  'termAr'
]);

const hasContent = (value: unknown): boolean =>
  typeof value === 'string'
    ? value.trim().length > 0
    : Array.isArray(value) && value.length > 0;

function mirror(node: unknown, depth: number): unknown {
  if (Array.isArray(node)) return node.map(item => mirror(item, depth + 1));
  if (!node || typeof node !== 'object') return node;

  const source = node as Record<string, unknown>;
  const result: Record<string, unknown> = {};
  for (const key of Object.keys(source)) {
    const value = source[key];
    if (key.endsWith('Ar')) {
      const enKey = `${key.slice(0, -2)}En`;
      const enValue = source[enKey];
      const keep = depth === 0 && KEEP_ARABIC_TOP_LEVEL.has(key);
      // For foreign language subjects, overwrite pedagogical Arabic slots with target language (En) text
      if (!keep && hasContent(enValue) && typeof enValue === typeof value) {
        result[key] = mirror(enValue, depth + 1);
        continue;
      }
    }
    result[key] = mirror(value, depth + 1);
  }
  return result;
}

export function isForeignLanguageSubject(subject?: string): boolean {
  return !!subject && FOREIGN_LANGUAGE_SUBJECTS.has(subject);
}

export function localizeSingleLecture(lecture: Lecture): Lecture {
  if (!lecture || !isForeignLanguageSubject(lecture.subject)) return lecture;
  return mirror(lecture, 0) as Lecture;
}

export function localizeForeignLanguageLectures(subject: string, lectures: Lecture[]): Lecture[] {
  if (!isForeignLanguageSubject(subject)) return lectures;
  return lectures.map(lecture => mirror(lecture, 0) as Lecture);
}
