console.log('Request data...')

const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data...')

        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'is working'
        }
        resolve(backendData)
    }, 2000)
})

p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            reject(data)
        }, 2000)
    })
}).catch(err => console.log('Error: ', err))
  .then((clientData) => {
        console.log('Data received: ', clientData)
        clientData.fromPromise = true
        return clientData
    })
    .then(data => {
    console.log('Modified', data)
        })