const CACHE_NAME = 'motor-mgmt-cache-v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/dashboard.html',
  '/login.js',
  '/dashboard.js',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});