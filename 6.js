console.log('Request data...')

/*
setTimeout(function () {
    console.log('Preparing data...')

    const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working'
    }

    setTimeout(() =>{
        backendData.modified = true;
        console.log('Data received', backendData)
    }, 2000)

},2000)*/

// ми отримали функцію Колбек в конструкторі класа проміс
// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data...')
//
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000)
// })
//
// p.then((data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data)
//             //        console.log('Data received', backendData)
//         }, 2000)
//     })
// }).then(clientData => {
//         console.log('Data received', clientData)
//         clientData.fromPromise = true;
//         return clientData
//     }).then(data => {
//     console.log('Modified data', data)
// })
//     .catch(err => console.error('Error:',err))
//     .finally(()=>{
//         console.log('Finally')
//     })


const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

// sleep(2000).then(() => console.log('after 2 seconds'));
// sleep(5000).then(() => console.log('after 5 seconds'));

Promise.all([sleep(2000), sleep(5000)])
.then(()=>{
    console.log('All promises')
})