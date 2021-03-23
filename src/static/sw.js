self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('caches')
      .then(cache => cache.addAll(['manifest.json', '/offline', 'styles/style.css']))
      .then(_ => self.skipWaiting())
  )
})

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim())
})

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request)
    .then(cached => {
      if (cached) return cached
      return fetch(e.request)
        .then(res => res)
        .catch(_ => caches.open('caches').then(cache => cache.match('/offline')))
    })
  )
})

self.addEventListener('push', e => {
  const data = e.data.json()

  self.registration.showNotification(data.title, {
    body: data.content,
    icon: data.icon
  })
})
