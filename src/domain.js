function localDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getDailyLesson(lessons, date = new Date()) {
  if (!Array.isArray(lessons) || lessons.length === 0) {
    throw new Error('At least one lesson is required.');
  }
  const [year, month, day] = localDateKey(date).split('-').map(Number);
  const dayNumber = Math.floor(Date.UTC(year, month - 1, day) / 86_400_000);
  const index = ((dayNumber % lessons.length) + lessons.length) % lessons.length;
  return lessons[index];
}

export function scoreComprehension(questions, answers) {
  const results = questions.map((question, index) => ({
    correct: answers[index] === question.answer,
    expected: question.answer,
    explanation: question.explanation,
  }));
  return {
    correct: results.filter((result) => result.correct).length,
    total: questions.length,
    results,
  };
}

const CONNECTORS = [
  'however', 'therefore', 'for example', 'in addition', 'although',
  'because', 'as a result', 'on the other hand', 'firstly', 'finally',
];

function wordsIn(text) {
  return text.toLowerCase().match(/[a-z]+(?:'[a-z]+)?/g) ?? [];
}

export function evaluateWriting(text, options = {}) {
  const minWords = options.minWords ?? 120;
  const targetWords = options.targetWords ?? 160;
  const keywords = options.keywords ?? [];
  const words = wordsIn(text);
  const paragraphs = text.trim() ? text.trim().split(/\n\s*\n/).filter(Boolean) : [];
  const sentences = text.split(/[.!?]+/).map((part) => part.trim()).filter(Boolean);
  const lower = text.toLowerCase();
  const connectorCount = CONNECTORS.filter((connector) => lower.includes(connector)).length;
  const relevanceCount = keywords.filter((keyword) => lower.includes(keyword.toLowerCase())).length;
  const uniqueRatio = words.length ? new Set(words).size / words.length : 0;

  const lengthScore = Math.min(25, Math.round((words.length / Math.max(minWords, 1)) * 25));
  const structureScore = paragraphs.length >= 2 ? 15 : paragraphs.length === 1 ? 7 : 0;
  const cohesionScore = Math.min(15, connectorCount * 7);
  const sentenceScore = sentences.length >= 3 ? 15 : sentences.length * 5;
  const vocabularyScore = Math.min(10, Math.round(uniqueRatio * 14));
  const relevanceScore = keywords.length
    ? Math.min(20, Math.round((relevanceCount / Math.min(2, keywords.length)) * 20))
    : 20;
  const score = Math.min(100, lengthScore + structureScore + cohesionScore + sentenceScore + vocabularyScore + relevanceScore);

  const strengths = [];
  const nextSteps = [];
  if (words.length >= minWords) strengths.push('You developed the response beyond the minimum length.');
  else nextSteps.push(`Add about ${minWords - words.length} more words to develop your reasoning.`);
  if (paragraphs.length >= 2) strengths.push('Your ideas are organised into clear paragraphs.');
  else nextSteps.push('Split the response into an opening idea and a developed explanation.');
  if (connectorCount >= 2) strengths.push('Linking phrases make the argument easier to follow.');
  else nextSteps.push('Use linking phrases such as “however” or “for example”.');
  if (keywords.length && relevanceCount === 0) nextSteps.push('Return to the prompt and use its key ideas directly.');
  if (words.length > targetWords * 1.25) nextSteps.push('Edit repeated ideas so the response is more precise.');

  return {
    wordCount: words.length,
    paragraphCount: paragraphs.length,
    sentenceCount: sentences.length,
    connectorCount,
    relevanceCount,
    vocabularyDiversity: Number(uniqueRatio.toFixed(2)),
    score,
    strengths,
    nextSteps,
    summary: 'This is a local first-pass rubric check, not teacher or AI marking.',
  };
}

function addUtcDays(date, days) {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next.toISOString().slice(0, 10);
}

export function updateWordProgress(word, rating, now = new Date()) {
  const remembered = rating === 'good';
  const interval = remembered
    ? word.interval >= 3 ? Math.round(word.interval * 2.3) : 3
    : 1;
  return {
    ...word,
    interval,
    repetitions: remembered ? (word.repetitions ?? 0) + 1 : 0,
    lapses: remembered ? (word.lapses ?? 0) : (word.lapses ?? 0) + 1,
    dueDate: addUtcDays(now, interval),
  };
}

export function getDueWords(words, now = new Date()) {
  const today = now.toISOString().slice(0, 10);
  return words
    .filter((word) => !word.dueDate || word.dueDate <= today)
    .sort((left, right) => (left.dueDate ?? '').localeCompare(right.dueDate ?? ''));
}
