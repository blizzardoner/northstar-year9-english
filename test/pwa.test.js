import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';

const root = new URL('../src/', import.meta.url);

test('PWA manifest declares standalone display and required icons', async () => {
  const manifest = JSON.parse(await readFile(new URL('manifest.webmanifest', root), 'utf8'));
  assert.equal(manifest.display, 'standalone');
  assert.equal(manifest.start_url, './');
  assert.ok(manifest.icons.some((icon) => icon.sizes === '192x192'));
  assert.ok(manifest.icons.some((icon) => icon.sizes === '512x512' && icon.purpose.includes('maskable')));
  await access(new URL('icons/icon-192.png', root));
  await access(new URL('icons/icon-512.png', root));
  await access(new URL('icons/apple-touch-icon.png', root));
});

test('service worker caches the application shell and all lesson batches', async () => {
  const worker = await readFile(new URL('sw.js', root), 'utf8');
  for (const asset of [
    './', './app.js', './styles.css', './manifest.webmanifest',
    './content/science-lessons-1.js', './content/science-lessons-2.js',
    './content/science-lessons-3.js', './content/science-lessons-4.js', './content/science-lessons-5.js',
    './content/technology-lessons-1.js', './content/technology-lessons-2.js',
    './content/technology-lessons-3.js', './content/technology-lessons-4.js',
    './content/society-lessons-1.js', './content/society-lessons-2.js',
    './content/society-lessons-3.js', './content/society-lessons-4.js',
    './content/learning-lessons-1.js', './content/learning-lessons-2.js',
    './content/learning-lessons-3.js', './content/learning-lessons-4.js',
    './content/australia-lessons-1.js', './content/australia-lessons-2.js',
    './content/australia-lessons-3.js', './content/australia-lessons-4.js',
    './content/culture-lessons-1.js', './content/economics-lessons-1.js',
    './content/health-lessons-1.js',
  ]) {
    assert.ok(worker.includes(asset), `missing ${asset}`);
  }
});
