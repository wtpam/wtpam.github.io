
self.addEventListener('install', e => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', event => {
  console.log('攔截請求:', event.request.url);
});