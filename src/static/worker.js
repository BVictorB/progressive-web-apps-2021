self.addEventListener('push', e => {
  const data = e.data.json()

  self.registration.showNotification(data.title, {
    body: data.content,
    icon: data.icon
  })
})
