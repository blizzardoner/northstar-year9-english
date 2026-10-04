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

test('service worker caches the application shell', async () => {
  const worker = await readFile(new URL('sw.js', root), 'utf8');
  for (const asset of ['./', './app.js', './styles.css', './manifest.webmanifest']) {
    assert.ok(worker.includes(asset), `missing ${asset}`);
  }
});
