self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('scuvoapp').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/js/config.js',
      '/js/auth.js',
      '/js/index.js',
      '/js/adds.js',
      '/css/style.css',
      '/img/background1.jpg',
      '/img/background2.jpg',
      '/img/logo.png',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});