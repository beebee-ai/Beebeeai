function stripInvisibleChars(value: string) {
  return value.replace(/[\u200B-\u200D\uFEFF]/g, '');
}

function normalizeWhitespace(value: string) {
  return value.replace(/\s+/g, ' ').trim();
}

export function normalizeName(value: string | undefined) {
  return normalizeWhitespace(stripInvisibleChars((value ?? '').normalize('NFKC'))).toLowerCase();
}

export function compactName(value: string | undefined) {
  return normalizeName(value).replace(/\s+/g, '');
}

export function normalizeCourseNumber(value: string | undefined) {
  return stripInvisibleChars((value ?? '').normalize('NFKC'))
    .replace(/[‐‑‒–—―－]/g, '-')
    .replace(/\s+/g, '')
    .trim()
    .toUpperCase();
}

export function buildCertificateSearchFields(name: string | undefined, courseNumber: string | undefined) {
  return {
    nameLower: normalizeName(name),
    nameNormalized: normalizeName(name),
    nameCompact: compactName(name),
    courseNumberUpper: normalizeCourseNumber(courseNumber),
    courseNumberNormalized: normalizeCourseNumber(courseNumber),
  };
}
