var resolveAfter25Seconds = (func) => {
    console.log(`starting a slow promise on: ${func}`)
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(25)
            console.log(`slow promise is done on: ${func}`)
        }, 25000)
    })
}

var resolveAfter1Second = (func) => {
    console.log(`Starting quick promise on: ${func}`)
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(25)
            console.log(`quick promise is done on: ${func}`)
        }, 1000)
    })
}

var sequentialStart = async () => {
    console.log("---Sequential Start---")
    const slow = await resolveAfter25Seconds('sequential start')
    const fast = await resolveAfter1Second('sequential start')
    console.log(slow + ' - sequential start')
    console.log(fast + ' - sequential start')
}

var concurrentStart = async () => {
    console.log("--- Concurrent Start ---")
    const slow = resolveAfter25Seconds('concurrent start')
    const fast = resolveAfter1Second('concurrent start')
    console.log(await slow + ' - concurrent start')
    console.log(await fast + ' - concurrent start')
}

var stillSerial = () => {
    console.log("-- Concurrent with Promise.then -- ")
    Promise.all([resolveAfter25Seconds('still serial'), resolveAfter1Second('still serial')]).then(([slow, fast]) => {
        console.log(slow + ' - still serial')
        console.log(fast + ' - still serial')
    })
}

var parallel = () => {
    console.log("-- Parallel with promise.then")
    resolveAfter25Seconds('parallel').then(message => { console.log(message + ' - parallel') })
    resolveAfter1Second('parallel').then(message => { console.log(message + ' - parallel') })
}

sequentialStart()
setTimeout(function() {
    console.log('5 seconds later...')
    concurrentStart()
    }, 5000)
setTimeout(function() {
    console.log('10 seconds later...')
    stillSerial()
    }, 10000)
setTimeout(function() {
    console.log('15 seconds later...')
    parallel()
    }, 15000)
