const CACHE_NAME = 'pivo360-v2';
const FILES = [
  './',
  './index.html',
  './manifest.json',
  './sw.js'
  // Puedes agregar más archivos si quieres
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
