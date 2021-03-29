const cacheItems = [
  'manifest.json', 
  'images/logo.png', 
  'styles/style.css', 
  'scripts/script.js',
  'scripts/socket.js',
  'scripts/subscribe.js'
]

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('caches')
      .then(cache => cache.addAll(cacheItems))
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
        // .catch(_ => caches.open('caches').then(cache => cache.match('/favorites')))
    })
  )
})

self.addEventListener('push', e => {
  const { title, content, icon, url } = e.data.json()

  self.registration.showNotification(title, {
    body: content,
    icon: icon,
    data: {
      url: url
    }
  })
})

self.addEventListener('notificationclick', e => {
  e.notification.close()
  e.waitUntil(
    clients.openWindow(e.notification.data.url)
  )
})
