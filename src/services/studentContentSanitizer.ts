import type { Lecture } from '../types';

const EXTERNAL_URL_PATTERN = /(?:https?:\/\/|ftp:\/\/|mailto:|tel:|\/\/|www\.)[^\s<>"'`]*/gi;
const EXTERNAL_PROVENANCE_PATTERN =
  /(?:المصدر المعتمد|المصدر الرسمي|مصدر\s*:|رابط (?:مورد|الكتاب|المصدر)|رابط عين|مرجع (?:الفهرس|الكتاب|المكوّن)|الفهرس الرسمي|عنوان الكتاب المدرسي|عنوان المحور في المنصة|مقارنة (?:العنوان|المحور)|الكتاب المدرسي|وزارة التعليم|لم تتوفر نسخة قابلة للتحقق|لم تطابق عناوينه|ليس نقلًا حرفيًا|ليس صورة من كتاب الوزارة|شرح تعليمي أصلي موجز|official (?:source|reference|contents|textbook)|source(?: URL| link)?\s*:|contents reference|could not be verified|not a verbatim textbook|not an image from a ministry textbook|textbook|Ministry of Education|\bIEN\b)/i;

export function removeExternalLinksFromText(text: string): string {
  const linkFreeText = text
    .replace(/!?\[([^\]]+)\]\(\s*(?:https?:\/\/|ftp:\/\/|mailto:|tel:|\/\/|www\.)[^)]*\)/gi, '$1')
    .replace(EXTERNAL_URL_PATTERN, (url) => {
      if (/^https?:\/\/www\.w3\.org\//i.test(url)) return url;
      const punctuation = url.match(/[.,!?،؛:)\]}]+$/)?.[0] || '';
      return punctuation;
    })
    .replace(/(?:رابط|link)\s*(?:الكتاب|المصدر|الموقع)?\s*[:：]\s*(?=[\r\n]|$)/gi, '')
    .replace(/\s*\(?\s*(?:ص|p\.?)\s*\d+(?:\s*[-–]\s*\d+)?\s*\)?/gi, '')
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/[ \t]+$/gm, '')
    .replace(/[ \t]+([,.;:!?،؛])/g, '$1');

  return linkFreeText
    .split(/\n{2,}/)
    .filter((paragraph) => !EXTERNAL_PROVENANCE_PATTERN.test(paragraph))
    .join('\n\n')
    .trim();
}

function sanitizeValue(value: unknown): unknown {
  if (typeof value === 'string') return removeExternalLinksFromText(value);
  if (Array.isArray(value)) return value.map(sanitizeValue);
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([key]) => !/(?:source|reference|textbookUrl|bookUrl)/i.test(key))
        .map(([key, nestedValue]) => [
          key,
          /^ministry(?:Ar|En)?$/i.test(key) ? '' : sanitizeValue(nestedValue)
        ])
    );
  }
  return value;
}

export function sanitizeLectureForStudents(lecture: Lecture): Lecture {
  return sanitizeValue(lecture) as Lecture;
}
