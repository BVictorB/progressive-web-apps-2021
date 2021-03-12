const 
  token = 'c15j4kv48v6tvr5klm7g',
  socket = new WebSocket(`wss://ws.finnhub.io?token=${token}`),
  el = document.querySelector('#live-symbol')

socket.addEventListener('open', (e) => {
  socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': symbol }))
})

socket.addEventListener('message', (e) => {
  const response = JSON.parse(e.data)

  if (response.data) {
    el.innerText = `$${response.data[0].p}`
  }
})
