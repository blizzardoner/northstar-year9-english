import test from 'node:test';
import assert from 'node:assert/strict';

import { legacyLessons, lessons } from '../src/lessons.js';

const wordCount = (text) => (text.match(/[A-Za-z]+(?:'[A-Za-z]+)?/g) ?? []).length;

test('the original 90 lessons remain the migration prefix in their original order', () => {
  assert.equal(legacyLessons.length, 90);
  assert.deepEqual(
    lessons.slice(0, legacyLessons.length).map((lesson) => lesson.id),
    legacyLessons.map((lesson) => lesson.id),
  );
});

test('the library contains 200 complete and unique Year 9 lessons', () => {
  assert.equal(lessons.length, 200);
  assert.equal(new Set(lessons.map((lesson) => lesson.id)).size, 200);
  assert.equal(new Set(lessons.map((lesson) => lesson.title)).size, 200);

  for (const lesson of lessons) {
    assert.match(lesson.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(lesson.title.length > 5, `${lesson.id}: missing title`);
    assert.ok(lesson.dek.length > 20, `${lesson.id}: missing dek`);
    assert.ok(lesson.minutes >= 15 && lesson.minutes <= 18, `${lesson.id}: invalid duration`);
    assert.ok(wordCount(lesson.passage) >= 230, `${lesson.id}: passage too short`);
    assert.ok(wordCount(lesson.passage) <= 420, `${lesson.id}: passage too long`);
    assert.equal(lesson.questions.length, 4, `${lesson.id}: question count`);
    for (const question of lesson.questions) {
      assert.equal(question.options.length, 4, `${lesson.id}: option count`);
      assert.ok(Number.isInteger(question.answer) && question.answer >= 0 && question.answer <= 3, `${lesson.id}: invalid answer`);
      assert.ok(question.explanation.length > 15, `${lesson.id}: explanation too short`);
    }
    assert.match(lesson.writingPrompt, /140.{0,3}180 words/i, `${lesson.id}: writing range`);
    assert.ok(lesson.writingKeywords.length >= 5 && lesson.writingKeywords.length <= 7, `${lesson.id}: writing keywords`);
    assert.equal(lesson.vocabulary.length, 5, `${lesson.id}: vocabulary count`);
    for (const word of lesson.vocabulary) {
      assert.ok(word.term && word.definition && word.example, `${lesson.id}: incomplete vocabulary`);
    }
  }
});
