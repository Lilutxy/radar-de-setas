const CACHE_NAME = 'radar-de-setas-v2';
const APP_SHELL = [
  './index.html',
  './mapa.html',
  './species-data.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // El clima siempre tiene que ser fresco: nunca lo servimos desde caché.
  if (url.hostname.includes('open-meteo.com')) {
    return; // deja pasar la petición tal cual, sin interceptar
  }

  // Archivos propios de la app: red primero (para ver siempre lo último subido),
  // y si no hay conexión, caemos a la última copia guardada.
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
  }
});
