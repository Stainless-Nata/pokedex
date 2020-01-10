var CACHE_NAME = 'starwars-pwa-cache-v1';
var urlsToCache = [
    '/',
    '/images/code.png',
    '/static/css'
];
self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                // Open a cache and cache our files
                return cache.addAll(urlsToCache);
            }).then(
                console.log("caching starts"))
    );
});