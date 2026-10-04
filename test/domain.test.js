import test from 'node:test';
import assert from 'node:assert/strict';

import {
  evaluateWriting,
  getDailyLesson,
  getDueWords,
  scoreComprehension,
  updateWordProgress,
} from '../src/domain.js';

const lessons = [
  { id: 'a', title: 'A' },
  { id: 'b', title: 'B' },
  { id: 'c', title: 'C' },
];

test('getDailyLesson returns the same lesson for the same local date', () => {
  const first = getDailyLesson(lessons, new Date('2026-10-03T08:00:00+10:00'));
  const later = getDailyLesson(lessons, new Date('2026-10-03T21:00:00+10:00'));

  assert.equal(first.id, later.id);
});

test('scoreComprehension scores answers and explains mistakes', () => {
  const questions = [
    { answer: 1, explanation: 'The second option is supported by paragraph two.' },
    { answer: 0, explanation: 'The opening sentence gives the reason.' },
  ];

  assert.deepEqual(scoreComprehension(questions, [1, 2]), {
    correct: 1,
    total: 2,
    results: [
      { correct: true, expected: 1, explanation: questions[0].explanation },
      { correct: false, expected: 0, explanation: questions[1].explanation },
    ],
  });
});

test('evaluateWriting returns honest rubric feedback without an AI service', () => {
  const draft = `School gardens deserve more support because they turn science into something students can observe. For example, a class can compare how plants respond to shade and sunlight.

However, a garden also requires planning. Students should share the work, record results, and explain whether the evidence supports their original prediction.`;

  const result = evaluateWriting(draft, { minWords: 45, targetWords: 60, keywords: ['school', 'garden'] });

  assert.equal(result.wordCount, 49);
  assert.equal(result.paragraphCount, 2);
  assert.equal(result.connectorCount, 3);
  assert.ok(result.score >= 70 && result.score <= 100);
  assert.match(result.summary, /local first-pass/i);
  assert.ok(result.strengths.length > 0);
});

test('evaluateWriting does not reward a short off-topic response with a high score', () => {
  const result = evaluateWriting(
    'School gardens are useful because students can observe plants. However, a small garden still needs a careful plan.',
    { minWords: 140, targetWords: 180, keywords: ['noise', 'quiet', 'sound'] },
  );

  assert.ok(result.score <= 50);
  assert.ok(result.nextSteps.some((step) => /prompt/i.test(step)));
});

test('word review schedules difficult words sooner than remembered words', () => {
  const now = new Date('2026-10-03T10:00:00Z');
  const word = { term: 'resilient', interval: 0, repetitions: 0, lapses: 0 };
  const again = updateWordProgress(word, 'again', now);
  const good = updateWordProgress(word, 'good', now);

  assert.equal(again.dueDate, '2026-10-04');
  assert.equal(again.lapses, 1);
  assert.equal(good.dueDate, '2026-10-06');
  assert.deepEqual(getDueWords([again, good], new Date('2026-10-04T12:00:00Z')), [again]);
});
