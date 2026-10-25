import { chromium } from 'playwright-core';
import { mkdir } from 'node:fs/promises';
import assert from 'node:assert/strict';

const browser = await chromium.launch({
  headless: true,
  executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
});
const baseUrl = process.env.BASE_URL || 'http://127.0.0.1:4173/';
const context = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const page = await context.newPage();
await page.goto(baseUrl, { waitUntil: 'networkidle' });

assert.equal(await page.title(), 'Northstar English');
assert.equal(await page.locator('text=Current reading').count(), 1);
assert.equal(await page.getByText(/Article \d+ of 200 · Year 9/).count(), 1);
const currentTitle = await page.locator('.hero h1').textContent();
const currentLessonId = await page.evaluate(() => JSON.parse(localStorage.getItem('northstar-english-v1')).currentLessonId);
assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth), false);

for (const selector of ['.primary', '.nav-btn']) {
  const boxes = await page.locator(selector).evaluateAll((elements) => elements.map((el) => ({ width: el.getBoundingClientRect().width, height: el.getBoundingClientRect().height })));
  assert.ok(boxes.every((box) => box.width >= 44 && box.height >= 44), `${selector} contains a touch target smaller than 44px`);
}

await mkdir('artifacts', { recursive: true });
await page.screenshot({ path: 'artifacts/iphone-home.png' });
await page.reload({ waitUntil: 'networkidle' });
assert.equal(await page.locator('.hero h1').textContent(), currentTitle);
assert.equal(
  await page.evaluate(() => JSON.parse(localStorage.getItem('northstar-english-v1')).currentLessonId),
  currentLessonId,
);
await page.locator('.next-article').click();
const nextTitle = await page.locator('.reader-title').textContent();
const nextLessonId = await page.evaluate(() => JSON.parse(localStorage.getItem('northstar-english-v1')).currentLessonId);
assert.notEqual(nextTitle, currentTitle);
assert.notEqual(nextLessonId, currentLessonId);
assert.equal(await page.locator('.choice').count(), 16);
assert.equal(await page.locator('#draft').count(), 1);
await page.locator('.reader-advance').scrollIntoViewIfNeeded();
await page.screenshot({ path: 'artifacts/iphone-next-article.png' });
for (let question = 0; question < 4; question += 1) await page.locator(`.choice[data-q="${question}"]`).first().click();
assert.equal(await page.locator('#check-answers').isEnabled(), true);
await page.locator('#check-answers').click();
assert.equal(await page.locator('.result-banner').count(), 1);

const response = `Our school should create quiet zones beside the library and the outdoor reading area. Noise from deliveries and crowded paths makes it difficult for students to concentrate, especially when classes are reading or discussing complicated ideas. A sound map would help the school identify the loudest times before spending money on changes.\n\nFor example, delivery hours could move to early morning, while planted screens could soften sound near study spaces. However, the school should not build high solid walls because hidden corners can feel unsafe and unwelcoming. Low planting, clear signs and student-designed seating would keep the area open. Teachers could test the plan for one month and collect student feedback before making it permanent. This approach would reduce avoidable noise without demanding complete silence. It would also use evidence, protect shared spaces and allow students to help shape a practical solution.`;
await page.locator('#draft').fill(response);
await page.locator('#review-writing').click();
assert.equal(await page.locator('text=Draft readiness').count(), 1);
assert.equal(await page.locator('#finish-lesson').isEnabled(), true);
await page.locator('#writing-feedback').scrollIntoViewIfNeeded();
await page.screenshot({ path: 'artifacts/iphone-lesson.png' });

await page.reload({ waitUntil: 'networkidle' });
assert.equal(await page.locator('.hero h1').textContent(), nextTitle);
assert.equal(
  await page.evaluate(() => JSON.parse(localStorage.getItem('northstar-english-v1')).currentLessonId),
  nextLessonId,
);
await page.locator('#start-lesson').click();
assert.ok((await page.locator('#draft').inputValue()).includes('Our school should create quiet zones'));

const manifest = await page.request.get(new URL('manifest.webmanifest', baseUrl).href);
assert.equal(manifest.status(), 200);
const serviceWorker = await page.request.get(new URL('sw.js', baseUrl).href);
assert.equal(serviceWorker.status(), 200);

await page.reload({ waitUntil: 'networkidle' });
await page.waitForFunction(() => Boolean(navigator.serviceWorker?.controller));
await context.setOffline(true);
await page.reload({ waitUntil: 'domcontentloaded' });
assert.equal(await page.title(), 'Northstar English');
await context.setOffline(false);

const migrationContext = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await migrationContext.addInitScript(() => {
  localStorage.setItem('northstar-english-v1', JSON.stringify({
    version: 1,
    completedDays: [],
    quizScores: {},
    drafts: {},
    words: {},
    minutes: 0,
  }));
});
const migrationPage = await migrationContext.newPage();
await migrationPage.goto(baseUrl, { waitUntil: 'networkidle' });
const migratedState = await migrationPage.evaluate(() => JSON.parse(localStorage.getItem('northstar-english-v1')));
const expectedLegacyLessonId = await migrationPage.evaluate(async () => {
  const [{ legacyLessons }, { getDailyLesson }] = await Promise.all([
    import('./lessons.js'),
    import('./domain.js'),
  ]);
  return getDailyLesson(legacyLessons, new Date()).id;
});
assert.equal(migratedState.version, 3);
assert.equal(migratedState.currentLessonId, expectedLegacyLessonId);
const migratedTitle = await migrationPage.locator('.hero h1').textContent();
await migrationPage.reload({ waitUntil: 'networkidle' });
assert.equal(await migrationPage.locator('.hero h1').textContent(), migratedTitle);
await migrationContext.close();

const versionTwoContext = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await versionTwoContext.addInitScript(() => {
  localStorage.setItem('northstar-english-v1', JSON.stringify({
    version: 2,
    completedDays: [],
    quizScores: {},
    drafts: {},
    words: {},
    minutes: 0,
    dailyLesson: { dateKey: '2000-01-01', lessonId: 'cool-cities' },
  }));
});
const versionTwoPage = await versionTwoContext.newPage();
await versionTwoPage.goto(baseUrl, { waitUntil: 'networkidle' });
const versionTwoState = await versionTwoPage.evaluate(() => JSON.parse(localStorage.getItem('northstar-english-v1')));
assert.equal(versionTwoState.version, 3);
assert.equal(versionTwoState.currentLessonId, 'cool-cities');
assert.equal(await versionTwoPage.locator('.hero h1').textContent(), 'Can a City Learn to Stay Cool?');
await versionTwoContext.close();

console.log(JSON.stringify({
  title: await page.title(),
  baseUrl,
  viewport: '390x844@2x',
  horizontalOverflow: false,
  quizChoices: 16,
  currentArticleStableAcrossReload: true,
  manualNextArticlePersists: true,
  legacyStatesMigrated: true,
  draftRestored: true,
  offlineReload: true,
  screenshots: ['artifacts/iphone-home.png', 'artifacts/iphone-next-article.png', 'artifacts/iphone-lesson.png'],
}, null, 2));
await browser.close();
