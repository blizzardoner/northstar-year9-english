const CACHE = 'northstar-v5';
const SHELL = [
  './',
  './index.html',
  './app.js',
  './domain.js',
  './lessons.js',
  './content/science-lessons-1.js',
  './content/science-lessons-2.js',
  './content/science-lessons-3.js',
  './content/science-lessons-4.js',
  './content/science-lessons-5.js',
  './content/technology-lessons-1.js',
  './content/technology-lessons-2.js',
  './content/technology-lessons-3.js',
  './content/technology-lessons-4.js',
  './content/society-lessons-1.js',
  './content/society-lessons-2.js',
  './content/society-lessons-3.js',
  './content/society-lessons-4.js',
  './content/learning-lessons-1.js',
  './content/learning-lessons-2.js',
  './content/learning-lessons-3.js',
  './content/learning-lessons-4.js',
  './content/australia-lessons-1.js',
  './content/australia-lessons-2.js',
  './content/australia-lessons-3.js',
  './content/australia-lessons-4.js',
  './content/culture-lessons-1.js',
  './content/economics-lessons-1.js',
  './content/health-lessons-1.js',
  './styles.css',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE).then((cache) => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match('./index.html'))),
  );
});
