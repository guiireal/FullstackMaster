const fileSystem = require('fs')

// CALLBACK DIRETO
fileSystem.readFile('modulo03/teste.txt', (err, value) => {
    if (err) console.log(err)
    console.log(value.toString())
})

// CALLBACK COM ASYNC AWAIT
const openFilePromise = (path) => {
    return new Promise((resolve, reject) => {
        fileSystem.readFile(path, (err, value) => {
            if (err) reject(err)
            resolve(value.toString())
        })
    })
}

const openFile = async (path) => {
    const data = await openFilePromise(path)
    console.log(data)
}
openFile('modulo03/teste.txt')