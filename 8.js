const delay = ms => {
    return new Promise(r =>
        setTimeout(() => r(), ms))
}

delay(5000).then(() => {
    console.log('Delay 5 seconds')
})