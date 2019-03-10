const fs = require('fs')

const _readFile = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, content) => {
            if (err)
                reject(err)
            else
                resolve(content)
        })
    })
}

const _writeFile = (file, content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, content, (err) => {
            if (err) reject(err)
            else resolve()
        })
    })
}

const copyFromTo = async (path, newPath) => {
    const data = await _readFile(path)
    await _writeFile(newPath, data)
    
}

copyFromTo('encadeando_promises.js', 'encadeando_promises_copy.js')