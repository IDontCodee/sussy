importScripts('/js/sw-scripts/uv.bundle.js');
importScripts('/js/sw-scripts/uv.config.js');
importScripts(__uv$config.sw || '/js/sw-scripts/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', event => {
    event.respondWith(sw.fetch(event))
});