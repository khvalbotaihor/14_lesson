const delay = ms => {
    return new Promise((resolve, reject) =>
        setTimeout(() => resolve(),ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos'
//
// const fetchTodo = () => {
//     console.log('Data is requested in server...')
//   return   delay(3000)
//         .then(() => fetch(url))
//         .then(response => response.json())
// }
//
// fetchTodo()
//     .then(data => console.log('Server data: ', data))
//     .catch(e => console.error('Error: ', e))

async function fetchAsyncTodo() {
    console.log('Data is requested in server...')
    try {
        await delay(3000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('Server data: ', data)
    }catch (e) {
        console.error('Error: ', e)
    }finally {
        await delay(5000)
        console.log('Finally')
    }
}

fetchAsyncTodo()