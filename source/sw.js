const CACHE = "lingala-bokilo-v1";

const ASSETS = [
  "/source/",
  "/source/index.html",
  "/source/manifest.webmanifest",
  "/source/sw.js",
  "/source/src/styles.css",
  "/source/src/app.js",
  "/source/data/seed.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
