console.log('Request data...')

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

},2000)