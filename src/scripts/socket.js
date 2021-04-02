const 
  socket = new WebSocket(`wss://ws.finnhub.io?token=${token}`),
  el = document.querySelector('#live-symbol'),
  liveSection = document.querySelector('#liveSection')

liveSection.style.display = 'block'
socket.addEventListener('open', _ => {
  socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': symbol }))
})

socket.addEventListener('message', e => {
  const response = JSON.parse(e.data)

  if (response.data) {
    el.innerText = `$${response.data[0].p}`
  }
})
