const delay = ms => {
    return new Promise(r =>
        setTimeout(() => r(), ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos'

function fetchData() {
  console.log('Data is requested in server...')
  return delay(3000)
      .then(() => fetch(url))
           .then(response => response.json())

}

fetchData()
    .then(data => console.log('Server data: ', data))
    .catch(e => console.error('Error: ', e))