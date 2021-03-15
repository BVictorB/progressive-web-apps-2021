const 
  publicVapidKey = 'BL8WVy_mnBpSZiErFaP1O5_TZQPDCxiQtq1rJNY0A8YwTMAUdtaVKg87bmeK4_TuVPUUOXAFp0Sx9EYHgFAc2g0',
  form = document.querySelector('form'),
  symbol = document.querySelector('#symbol'),
  price = document.querySelector('#price')

const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - base64String.length % 4) % 4)
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

const send = async (e) => {
  e.preventDefault()
  if (!symbol.value || !price.value) {
    alert('Please fill in all the required fields!')
    return
  }
  
  const register = await navigator.serviceWorker.register('/worker.js', {
    scope: '/'
  })

  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
  })

  await fetch('/subscribe', {
    method: 'POST',
    body: JSON.stringify({
      subscription: subscription,
      symbol: symbol.value,
      price: price.value
    }),
    headers: {
      'content-type': 'application/json'
    }
  })

  alert('You will receive a notification once the price of this symbol drops below your requested price!')
}

if ('serviceWorker' in navigator) {
  form.addEventListener('submit', send)
}
