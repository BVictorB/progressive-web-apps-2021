const token = 'c13nl2f48v6qin45q3pg'

// Frontend live price fetching

// const socket = new WebSocket(`wss://ws.finnhub.io?token=${token}`);

// // Connection opened -> Subscribe
// socket.addEventListener('open', function (event) {
//   socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'AAPL' }))
//   socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'TSLA' }))
// });

// // Listen for messages
// socket.addEventListener('message', function (event) {
//   const data = JSON.parse(event.data)

//   data.data.forEach(obj => {
//     if (obj.s === 'TSLA') {
//       console.log(`Tesla: ${obj.p}`)
//     } else if (obj.s === 'AAPL') {
//       console.log(`Apple: ${obj.p}`)
//     }
//   })
// });

// // Unsubscribe
// var unsubscribe = function (symbol) {
//   socket.send(JSON.stringify({ 'type': 'unsubscribe', 'symbol': symbol }))
// }

// Backend price fetching

const getQuote = (symbol) => {
  return fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${token}`)
    .then(res => res.json())
    .catch(_ => null)
}

const testFunc = async () => {
  const appleQuote = await getQuote('AAPL')
  console.log(appleQuote)
}

testFunc()